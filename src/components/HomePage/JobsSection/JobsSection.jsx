import React from 'react';
import PropTypes from 'prop-types';

import JobsList from '../../common/JobsList';
import Link from '../../common/Link';
import PageSection from '../../common/PageSection';

const HomePageJobsSection = ({ jobs }) => (
  <PageSection>
    <PageSection.Heading>Featured Jobs</PageSection.Heading>
    <PageSection.SubHeading>
      Want to see more?&nbsp;
      <Link to="/jobs">View all jobs!</Link>
    </PageSection.SubHeading>
    <JobsList jobs={jobs} />
  </PageSection>
);

HomePageJobsSection.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomePageJobsSection;
