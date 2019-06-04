import React from 'react';
import { storiesOf } from '@storybook/react';

import readMe from './README.md';
import { StaticQuery } from '.';

storiesOf('Atoms | StaticQuery', module).add('default', () => <div/>, {
  notes: { markdown: readMe }
});
