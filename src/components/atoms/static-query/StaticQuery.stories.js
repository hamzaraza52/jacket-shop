import React from 'react';
import { storiesOf } from '@storybook/react';

import readme from './README.md';

storiesOf('Atoms | StaticQuery', module).add('default', () => <div/>, {
  notes: { markdown: readme }
});
