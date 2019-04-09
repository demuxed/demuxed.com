import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Hero from './Hero';
import { flattenAirtableNode, extractNodes } from '../../../helpers/data';

const HeroContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allAirtable (filter: { table: { eq: "Events" } }, limit: 2) {
          edges {
            node {
              data {
                startDate: Time_Start(formatString: "D.M.YYYY")
                type: Type
                url: Event_URL
                location: Location {
                  data {
                    city: City
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const events = extractNodes(data.allAirtable).map(flattenAirtableNode);
      return <Hero events={events} />;
    }}
  />
);

export default HeroContainer;
