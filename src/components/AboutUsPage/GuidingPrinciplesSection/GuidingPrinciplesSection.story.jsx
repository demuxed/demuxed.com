import React from 'react';
import { storiesOf } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import GuidingPrinciplesSection from './GuidingPrinciplesSection';
import icon from '../../../images/for-everyone-icon.svg';

const principles = [
  {
    frontmatter: {
      title: 'For everyone in the industry',
      image: { publicURL: icon },
    },
    html:
      '<p>In keeping with our love for reasonable standards, we\'re '
      + 'adopting the <a href="http://confcodeofconduct.com/">Conf Code of '
      + 'Conduct</a> for the event. Any questions or concerns, please speak to '
      + 'any of our voluenteers or organizers. <a href="mailto:info@demuxed.com">Or email us directly.</a></p>',
  },
  {
    frontmatter: {
      title: 'For everyone in the industry',
      image: { publicURL: icon },
    },
    html:
      '<p>In keeping with our love for reasonable standards, we\'re '
      + 'adopting the <a href="http://confcodeofconduct.com/">Conf Code of '
      + 'Conduct</a> for the event. Any questions or concerns, please speak to '
      + 'any of our voluenteers or organizers. <a href="mailto:info@demuxed.com">Or email us directly.</a></p>',
  },
  {
    frontmatter: {
      title: 'For everyone in the industry',
      image: { publicURL: icon },
    },
    html:
      '<p>In keeping with our love for reasonable standards, we\'re '
      + 'adopting the <a href="http://confcodeofconduct.com/">Conf Code of '
      + 'Conduct</a> for the event. Any questions or concerns, please speak to '
      + 'any of our voluenteers or organizers. <a href="mailto:info@demuxed.com">Or email us directly.</a></p>',
  },
  {
    frontmatter: {
      title: 'For everyone in the industry',
      image: { publicURL: icon },
    },
    html:
      '<p>In keeping with our love for reasonable standards, we\'re '
      + 'adopting the <a href="http://confcodeofconduct.com/">Conf Code of '
      + 'Conduct</a> for the event. Any questions or concerns, please speak to '
      + 'any of our voluenteers or organizers. <a href="mailto:info@demuxed.com">Or email us directly.</a></p>',
  },
];

storiesOf('GuidingPrinciplesSection', module)
  .add('GuidingPrinciplesSection', () => (
    <GuidingPrinciplesSection principles={principles} />
  ));

storiesOf('GuidingPrinciplesSection', module)
  .addDecorator(withViewport('ipad'))
  .add('GuidingPrinciplesSection on tablet', () => (
    <GuidingPrinciplesSection principles={principles} />
  ));

storiesOf('GuidingPrinciplesSection', module)
  .addDecorator(withViewport('iphone6'))
  .add('GuidingPrinciplesSection on mobile', () => (
    <GuidingPrinciplesSection principles={principles} />
  ));
