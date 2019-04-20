/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import List from '../List';
import EventCard from './EventCard';

const EventsList = ({ events }) => (
  <List>
    {events.map((item, i) => <EventCard key={i} {...item} />)}
  </List>
);

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventsList;
