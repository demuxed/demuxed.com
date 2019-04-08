import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import AboutUsSection from './AboutUsSection';

const AboutUsSectionContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark (filter: { fileAbsolutePath: { regex: "/\/aboutUs.md/" } }) {
          edges {
            node {
              frontmatter {
                image {
                  publicURL
                }
              }
              html
            }
          }
        }
      }
    `}
    render={(data) => {
      const aboutUsData = data.allMarkdownRemark.edges[0].node;
      return <AboutUsSection {...aboutUsData} />;
    }}
  />
);

export default AboutUsSectionContainer;
