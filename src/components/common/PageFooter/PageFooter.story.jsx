import React from 'react';
import { storiesOf } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import PageFooter from './PageFooter';

storiesOf('PageFooter', module)
  .add('PageFooter', () => (
    <PageFooter />
  ))
  .addDecorator(withViewport('iphone6'))
  .add('PageFooter on mobile', () => (
    <PageFooter />
  ));
