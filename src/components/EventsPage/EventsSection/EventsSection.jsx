import React from 'react';
import PropTypes from 'prop-types';

import EventsList from '../../common/EventsList';
import Link from '../../common/Link';
import PageSection from '../../common/PageSection';

const EventsSection = ({ events }) => (
  <PageSection>
    <PageSection.Heading>Upcoming Events</PageSection.Heading>
    <PageSection.SubHeading>
      Run an event or interested in running one?&nbsp;
      <Link to="mailto:info@demuxed.com">Get in touch!</Link>
    </PageSection.SubHeading>
    <EventsList events={events} />
  </PageSection>
);

EventsSection.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventsSection;
