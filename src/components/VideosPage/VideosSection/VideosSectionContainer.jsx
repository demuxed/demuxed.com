import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import VideosSection from './VideosSection';
import { extractNodes } from '../../../helpers/data';

const VideosSectionContainer = (props) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark (filter: { fileAbsolutePath: { regex: "/videos/" } }) {
          edges {
            node {
              frontmatter {
                title
                author
                date
                description
                tags
              }
              html
            }
          }
        }
      }
    `}
    render={data => <VideosSection videos={extractNodes(data.allMarkdownRemark)} {...props} />}
  />
);

export default VideosSectionContainer;
