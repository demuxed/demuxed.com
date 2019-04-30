import React from 'react';
import PropTypes from 'prop-types';

import List from '../List';
import CommunityCard from './CommunityCard';

const CommunityList = ({ communities }) => (
  <List>
    {communities.map(item => (
      <CommunityCard key={item.name} {...item} />
    ))}
  </List>
);

CommunityList.propTypes = {
  communities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommunityList;
