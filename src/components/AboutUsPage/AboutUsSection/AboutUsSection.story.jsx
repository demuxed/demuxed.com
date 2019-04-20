import React from 'react';
import { storiesOf } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import AboutUsSection from './AboutUsSection';
import image from '../../../images/about-photos.jpg';

const aboutUsData = {
  frontmatter: {
    image: { publicURL: image },
  },
  html:
    '<h3>Who are we?</h3><p>To be terribly honest, we\'re simply engineers '
    + 'talking about video technology. After two years of chatting about video '
    + 'at the <a href="http://www.meetup.com/SF-Video-Technology/">SF Video '
    + 'Technology Meetup,</a> we\'ve decided it\'s time for an engineer-first '
    + 'event with quality technical talks about video. Our focus is on video '
    + 'delivered over the web, but topics cover anything from encoding to playback and more!</p>',
};

storiesOf('AboutUsSection', module)
  .add('AboutUsSection', () => (
    <AboutUsSection {...aboutUsData} />
  ));

storiesOf('AboutUsSection', module)
  .addDecorator(withViewport('iphone6'))
  .add('AboutUsSection on mobile', () => (
    <AboutUsSection {...aboutUsData} />
  ));
