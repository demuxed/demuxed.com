import React from 'react';
import { storiesOf } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import FeaturedVideo from './FeaturedVideo';

const featuredVideoData = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  url: 'https://www.youtube.com/embed/KaA4BqiFIsI?rel=0',
  fullVideoUrl: '#',
  viewMoreUrl: '#',
};

storiesOf('FeaturedVideo', module)
  .add('FeaturedVideo', () => (
    <FeaturedVideo {...featuredVideoData} />
  ));

storiesOf('FeaturedVideo', module)
  .addDecorator(withViewport('iphone6'))
  .add('FeaturedVideo on mobile', () => (
    <FeaturedVideo {...featuredVideoData} />
  ));
