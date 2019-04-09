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

        file (relativePath: { eq: "hero-banner.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => {
      const events = extractNodes(data.allAirtable).map(flattenAirtableNode);
      const imageSharpFluid = data.file.childImageSharp.fluid;

      return (
        <Hero
          events={events}
          imageSharpFluid={imageSharpFluid}
        />
      );
    }}
  />
);

export default HeroContainer;
