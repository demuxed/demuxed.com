import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import GuidingPrinciplesSection from './GuidingPrinciplesSection';
import { extractNodes } from '../../../helpers/data';

const GuidingPrinciplesSectionContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark (
          filter: { fileAbsolutePath: { regex: "/\/guidingPrinciples\//" } },
          sort: { fields: frontmatter___position }
        ) {
          edges {
            node {
              frontmatter {
                title
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
    render={data => <GuidingPrinciplesSection principles={extractNodes(data.allMarkdownRemark)} />}
  />
);

export default GuidingPrinciplesSectionContainer;
