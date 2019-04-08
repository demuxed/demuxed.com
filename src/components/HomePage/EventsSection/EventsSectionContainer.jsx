import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import EventsSection from './EventsSection';
import { flattenAirtableNode, extractNodes } from '../../../helpers/data';

const EventsSectionContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allAirtable (filter: { table: { eq: "Events" } }, limit: 6) {
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
      return <EventsSection events={events} />;
    }}
  />
);

export default EventsSectionContainer;
