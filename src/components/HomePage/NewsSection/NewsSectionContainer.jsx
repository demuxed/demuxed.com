import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import NewsSection from './NewsSection';
import { extractNodes } from '../../../helpers/data';

const NewsSectionContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark (filter: { fileAbsolutePath: { regex: "/news/" } }) {
          edges {
            node {
              frontmatter {
                title
                date
                url
              }
              html
            }
          }
        }
      }
    `}
    render={data => <NewsSection news={extractNodes(data.allMarkdownRemark)} />}
  />
);

export default NewsSectionContainer;
