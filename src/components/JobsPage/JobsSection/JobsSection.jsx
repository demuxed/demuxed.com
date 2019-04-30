import React from 'react';
import PropTypes from 'prop-types';

import JobsList from '../../common/JobsList';
import PageSection from '../../common/PageSection';

const JobsSection = ({ jobs }) => (
  <PageSection>
    <PageSection.Heading>Featured Jobs</PageSection.Heading>
    <JobsList jobs={jobs} />
  </PageSection>
);

JobsSection.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default JobsSection;
