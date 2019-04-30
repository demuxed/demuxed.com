import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Hero from './Hero';
import { flattenAirtableNode, extractNodes } from '../../../helpers/data';

const HeroContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allAirtable(filter: { table: { eq: "Events" } }, limit: 2) {
          edges {
            node {
              data {
                startDate: Time_Start(formatString: "M.D.YYYY")
                type: Type
                url: Event_URL
                community: Community {
                  data {
                    name: Community_Name
                    Logo {
                      localFiles {
                        childImageSharp {
                          fixed(width: 500) {
                            ...GatsbyImageSharpFixed
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const events = extractNodes(data.allAirtable).map(flattenAirtableNode);
      return <Hero events={events} />;
    }}
  />
);

export default HeroContainer;
