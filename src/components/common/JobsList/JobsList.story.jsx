import React from 'react';
import { storiesOf } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import JobsList from './JobsList';

const jobs = [
  {
    position: 'Supervising Communication Systems Engineer',
    company: 'YouTube',
    description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>',
    url: '#',
  },
  {
    position: 'SVoIP Audio Engineer',
    company: 'Netflix',
    description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>',
    url: '#',
  },
  {
    position: 'Supervising Communication Systems Engineer',
    company: 'YouTube',
    description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>',
    url: '#',
  },
  {
    position: 'Supervising Communication Systems Engineer',
    company: 'YouTube',
    description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>',
    url: '#',
  },
];

storiesOf('JobsList', module)
  .add('JobsList', () => (
    <JobsList jobs={jobs} />
  ));

storiesOf('JobsList', module)
  .addDecorator(withViewport('iphone6'))
  .add('JobsList on mobile', () => (
    <JobsList jobs={jobs} />
  ));
