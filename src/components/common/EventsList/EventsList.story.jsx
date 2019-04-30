import React from 'react';
import { storiesOf } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import EventsList from './EventsList';

const events = [
  {
    type: 'Demuxed meetup',
    location: [{ city: 'San Francisco' }],
    startDate: '30.1.17',
    url: '#',
  },
  {
    type: 'Demuxed meetup',
    location: [{ city: 'San Francisco' }],
    startDate: '30.1.17',
    url: '#',
  },
  {
    type: 'Demuxed meetup',
    location: [{ city: 'San Francisco' }],
    startDate: '30.1.17',
    url: '#',
  },
  {
    type: 'Demuxed meetup',
    location: [{ city: 'San Francisco' }],
    startDate: '30.1.17',
    url: '#',
  },
  {
    type: 'Demuxed meetup',
    location: [{ city: 'San Francisco' }],
    startDate: '30.1.17',
    url: '#',
  },
  {
    type: 'Demuxed meetup',
    location: [{ city: 'San Francisco' }],
    startDate: '30.1.17',
    url: '#',
  },
];

storiesOf('EventsList', module)
  .add('EventsList', () => (
    <EventsList events={events} />
  ));

storiesOf('EventsList', module)
  .addDecorator(withViewport('ipad'))
  .add('EventsList on tablet', () => (
    <EventsList events={events} />
  ));

storiesOf('EventsList', module)
  .addDecorator(withViewport('iphone6'))
  .add('EventsList on mobile', () => (
    <EventsList events={events} />
  ));
