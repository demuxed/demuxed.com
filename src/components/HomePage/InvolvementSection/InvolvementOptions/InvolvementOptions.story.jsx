import React from 'react';
import { storiesOf } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import InvolvementOptions from './InvolvementOptions';

storiesOf('InvolvementOptions', module)
  .add('InvolvementOptions', () => (
    <InvolvementOptions />
  ));

storiesOf('InvolvementOptions', module)
  .addDecorator(withViewport('ipad'))
  .add('InvolvementOptions on tablet', () => (
    <InvolvementOptions />
  ));

storiesOf('InvolvementOptions', module)
  .addDecorator(withViewport('iphone6'))
  .add('InvolvementOptions on mobile', () => (
    <InvolvementOptions />
  ));
