import React from 'react';
import PropTypes from 'prop-types';

import CommunityList from '../../common/CommunityList';
import EventsList from '../../common/EventsList';
import Link from '../../common/Link';
import PageSection from '../../common/PageSection';

const EventsSection = ({ communities, events }) => (
  <>
    <PageSection>
      <PageSection.Heading>Upcoming Meetups/Events</PageSection.Heading>
      <PageSection.SubHeading>
        Run an event or interested in running one?&nbsp;
        <Link to="mailto:info@demuxed.com">Get in touch!</Link>
      </PageSection.SubHeading>
      <EventsList events={events} />
    </PageSection>

    <PageSection>
      <PageSection.Heading>All Communities</PageSection.Heading>
      <PageSection.SubHeading>
        All the meetups around the world!
      </PageSection.SubHeading>
      <CommunityList communities={communities} />
    </PageSection>
  </>
);

EventsSection.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  communities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventsSection;
