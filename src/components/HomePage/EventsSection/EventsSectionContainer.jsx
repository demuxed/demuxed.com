import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import EventsSection from './EventsSection';
import { flattenAirtableNode, extractNodes } from '../../../helpers/data';

const EventsSectionContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allAirtable(
          filter: { table: { eq: "Events" } }
          sort: { fields: [data___Time_Start], order: ASC }
          limit: 6
        ) {
          edges {
            node {
              data {
                startDate: Time_Start(formatString: "MMM D, YYYY")
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
      return <EventsSection events={events} />;
    }}
  />
);

export default EventsSectionContainer;
