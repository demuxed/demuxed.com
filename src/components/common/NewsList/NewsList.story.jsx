import React from 'react';
import { storiesOf } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import NewsList from './NewsList';

const news = [
  {
    frontmatter: {
      title: 'Article title',
      date: 'June 19, 2018',
      url: '#',
    },
    html: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>',
  },
  {
    frontmatter: {
      title: 'Article title',
      date: 'June 19, 2018',
      url: '#',
    },
    html: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>',
  },
  {
    frontmatter: {
      title: 'Article title',
      date: 'June 19, 2018',
      url: '#',
    },
    html: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>',
  },
  {
    frontmatter: {
      title: 'Article title',
      date: 'June 19, 2018',
      url: '#',
    },
    html: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>',
  },
];

storiesOf('NewsList', module)
  .add('NewsList', () => (
    <NewsList news={news} />
  ));

storiesOf('NewsList', module)
  .addDecorator(withViewport('iphone6'))
  .add('NewsList on mobile', () => (
    <NewsList news={news} />
  ));
