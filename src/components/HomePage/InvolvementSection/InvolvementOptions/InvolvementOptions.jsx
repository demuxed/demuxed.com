import React from 'react';

import IOCard from './InvolvementOptionCard';
import MailingListSubscriptionForm from './MailingListSubscriptionForm';
import Link from '../../../common/Link';
import List from '../../../common/List';
import podcastIcon from '../../../../images/podcast-illustration.svg';
import slackIcon from '../../../../images/slack-illustration.svg';
import subscribeIcon from '../../../../images/subscribe-illustration.svg';

const InvolvementOptions = () => (
  <List>
    <IOCard>
      <IOCard.Image src={subscribeIcon} alt="Subscribe illustration" />
      <IOCard.Heading>Subscribe to the Demuxed mailing list</IOCard.Heading>
      <MailingListSubscriptionForm />
    </IOCard>

    <IOCard>
      <IOCard.Image src={slackIcon} alt="Slack illustration" />
      <IOCard.Heading>
        Join the #demuxed channel on{' '}
        <a href="https://video-dev.org">Video-Dev</a>!
      </IOCard.Heading>
      <IOCard.Button
        as={Link}
        to="https://video-dev.slack.com/messages/demuxed/"
      >
        Join
      </IOCard.Button>
    </IOCard>

    <IOCard>
      <IOCard.Image src={podcastIcon} alt="Podcast illustration" />
      <IOCard.Heading>Subscribe to the Demuxed podcast</IOCard.Heading>
      <IOCard.Button
        as={Link}
        to="https://www.heavybit.com/library/podcasts/demuxed/"
      >
        Subscribe
      </IOCard.Button>
    </IOCard>
  </List>
);

export default InvolvementOptions;
