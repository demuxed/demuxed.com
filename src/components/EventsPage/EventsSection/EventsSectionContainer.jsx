import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import EventsSection from './EventsSection';
import { flattenAirtableNode, extractNodes } from '../../../helpers/data';

const EventsSectionContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        events: allAirtable(
          filter: { table: { eq: "Events" } }
          sort: { fields: [data___Time_Start], order: ASC }
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

        communities: allAirtable(filter: { table: { eq: "Communities" } }) {
          edges {
            node {
              data {
                name: Community_Name
                url: URL
                logo: Logo {
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
    `}
    render={data => {
      const events = extractNodes(data.events).map(flattenAirtableNode);
      const communities = extractNodes(data.communities).map(
        flattenAirtableNode
      );
      return <EventsSection events={events} communities={communities} />;
    }}
  />
);

export default EventsSectionContainer;
