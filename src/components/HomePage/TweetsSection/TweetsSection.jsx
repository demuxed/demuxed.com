import React from 'react';

import TweetsList from './TweetsList';
import PageSection from '../../common/PageSection';

const TweetsSection = ({ tweets }) => (
  <PageSection>
    <PageSection.Heading>From Twitter</PageSection.Heading>
    <TweetsList tweets={tweets} />
  </PageSection>
);

export default TweetsSection;
