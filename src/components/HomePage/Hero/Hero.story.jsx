import React from 'react';
import { storiesOf } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import Hero from './Hero';
import heroBanner from '../../../images/hero-banner.png';
import muxIcon from '../../../images/mux.svg';
import vimeoIcon from '../../../images/vimeo.svg';

const events = [
  {
    type: 'Demuxed meetup',
    url: '#',
    startDate: 'June 19, 2018',
    location: [{ city: 'San Francisco' }],
    logos: [
      muxIcon,
      vimeoIcon,
    ],
  },
  {
    type: 'Demuxed meetup',
    url: '#',
    startDate: 'June 19, 2018',
    location: [{ city: 'San Francisco' }],
    logos: [
      muxIcon,
      vimeoIcon,
    ],
  },
];

storiesOf('Hero', module)
  .add('Hero', () => (
    <Hero events={events} imageSharpFluid={{src: heroBanner}} />
  ));

storiesOf('Hero', module)
  .addDecorator(withViewport('ipad'))
  .add('Hero on tablet', () => (
    <Hero events={events} imageSharpFluid={{src: heroBanner}} />
  ));

storiesOf('Hero', module)
  .addDecorator(withViewport('iphone6'))
  .add('Hero on mobile', () => (
    <Hero events={events} imageSharpFluid={{src: heroBanner}} />
  ));
