import React from 'react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs';

import { ProductCard } from './components/ProductCard';
import readMe from './README.md';

const exampleImgSrc =
  'https://cdn.shopify.com/s/files/1/0015/2774/2577/products/product-image-670060808_800x.jpg?v=1543901544';

storiesOf('Molecules | Product Card', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <ProductCard
        product={{
          staticId: text('Product ID', 'SOME_ID'),
          displayName: text('Display Name', 'Jacket Potatoe'),
          currentPrice: number('Current Price', 50),
          imgSrc: text('Image Source', exampleImgSrc),
          inStock: boolean('In Stock?', true)
        }}
        href={text('href', '/')}
        onClick={select('onClick', [() => {}, null], null)}
      />
    ),
    { notes: { markdown: readMe } }
  );
