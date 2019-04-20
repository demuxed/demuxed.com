import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import JobsSection from './JobsSection';
import { extractNodes } from '../../../helpers/data';

const JobsSectionContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allJobsJson {
          edges {
            node {
              position
              company
              description
              url
            }
          }
        }
      }
    `}
    render={data => <JobsSection jobs={extractNodes(data.allJobsJson)} />}
  />
);

export default JobsSectionContainer;
