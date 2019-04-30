import React from 'react';
import PropTypes from 'prop-types';

import EventsList from '../../common/EventsList';
import PageSection from '../../common/PageSection';

const EventsSection = ({ events }) => (
  <PageSection>
    <PageSection.Heading>Upcoming Events &amp; Meetups</PageSection.Heading>
    <EventsList events={events} />
  </PageSection>
);

EventsSection.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventsSection;
