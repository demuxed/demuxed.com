import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import FeaturedVideo from './FeaturedVideo';

const FeaturedVideoContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark (
          filter: {
            fileAbsolutePath: { regex: "/videos/" },
            frontmatter: { showOnHomePage: { eq: true } }
          },
          limit: 1
        ) {
          edges {
            node {
              frontmatter {
                description
                tags
                url
              }
              html
            }
          }
        }
      }
    `}
    render={(data) => {
      const featuredVideoData = data.allMarkdownRemark.edges[0].node;
      return <FeaturedVideo {...featuredVideoData} />;
    }}
  />
);

export default FeaturedVideoContainer;
