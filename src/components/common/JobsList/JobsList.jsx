/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import List from '../List';
import SynopsisCard from '../SynopsisCard';

const JobsList = ({ jobs }) => (
  <List>
    {jobs.map((item, i) => (
      <SynopsisCard
        key={i}
        heading={item.position}
        subHeading={item.company}
        text={item.description}
        url={item.url}
      />
    ))}
  </List>
);

JobsList.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default JobsList;
