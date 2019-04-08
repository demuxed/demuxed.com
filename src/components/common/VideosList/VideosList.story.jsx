import React from 'react';
import { storiesOf } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import VideosList from './VideosList';

const videos = [
  {
    title: 'David LaPalomento. Brightcove - In a Perfect World: Why Media Sources Are a Hassle',
    author: 'SF Video Tech Meetup',
    date: '30.1.17',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem...',
    url: 'https://www.youtube.com/embed/KaA4BqiFIsI?rel=0',
  },
  {
    title: 'David LaPalomento. Brightcove - In a Perfect World: Why Media Sources Are a Hassle',
    author: 'SF Video Tech Meetup',
    date: '30.1.17',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem...',
    url: 'https://www.youtube.com/embed/KaA4BqiFIsI?rel=0',
  },
  {
    title: 'David LaPalomento. Brightcove - In a Perfect World: Why Media Sources Are a Hassle',
    author: 'SF Video Tech Meetup',
    date: '30.1.17',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem...',
    url: 'https://www.youtube.com/embed/KaA4BqiFIsI?rel=0',
  },
  {
    title: 'David LaPalomento. Brightcove - In a Perfect World: Why Media Sources Are a Hassle',
    author: 'SF Video Tech Meetup',
    date: '30.1.17',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem...',
    url: 'https://www.youtube.com/embed/KaA4BqiFIsI?rel=0',
  },
  {
    title: 'David LaPalomento. Brightcove - In a Perfect World: Why Media Sources Are a Hassle',
    author: 'SF Video Tech Meetup',
    date: '30.1.17',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem...',
    url: 'https://www.youtube.com/embed/KaA4BqiFIsI?rel=0',
  },
  {
    title: 'David LaPalomento. Brightcove - In a Perfect World: Why Media Sources Are a Hassle',
    author: 'SF Video Tech Meetup',
    date: '30.1.17',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem...',
    url: 'https://www.youtube.com/embed/KaA4BqiFIsI?rel=0',
  },
];

storiesOf('VideosList', module)
  .add('VideosList', () => (
    <VideosList videos={videos} />
  ));

storiesOf('VideosList', module)
  .addDecorator(withViewport('iphone6'))
  .add('VideosList on mobile', () => (
    <VideosList videos={videos} />
  ));
