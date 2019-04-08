import React from 'react';
import { storiesOf } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import FeaturedVideo from './FeaturedVideo';

const featuredVideoData = {
  frontmatter: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    tags: ['media-sources'],
    url: 'https://www.youtube.com/watch?v=KaA4BqiFIsI',
  },
  html: '<iframe frameBorder="0" src="https://www.youtube.com/embed/KaA4BqiFIsI?rel=0" height="100%" width="100%"></iframe>',
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
