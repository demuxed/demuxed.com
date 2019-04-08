import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import JobsSection from './JobsSection';
import { extractNodes } from '../../../helpers/data';

const JobsSectionContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        allJobsJson (limit: 4) {
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
