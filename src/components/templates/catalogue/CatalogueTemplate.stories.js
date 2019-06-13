import React from 'react';
import { storiesOf } from '@storybook/react';
import { CatalogueTemplate } from '.';
import readMe from './README.md';

storiesOf('Templates | Catalogue Template', module).add(
  'Default',
  () => <CatalogueTemplate />,
  { notes: { markdown: readMe } }
);
