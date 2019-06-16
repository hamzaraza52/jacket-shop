import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';

import { Price } from '.';
import readme from './README.md';

storiesOf('Atoms | Price', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <Price
        price={number('Main Price', 50)}
        originalPrice={number('original price', null)}
      />
    ),
    { notes: { markdown: readme } }
  )
  .add(
    'With original price',
    () => (
      <Price
        price={number('main price', 29.99)}
        originalPrice={number('original price', 50)}
      />
    ),
    { notes: { markdown: readme } }
  );
