import React from 'react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { ProductCard } from './components/ProductCard';
import readMe from './README.md';

const exampleImgSrc =
  'https://cdn.shopify.com/s/files/1/0015/2774/2577/products/product-image-670060808_800x.jpg?v=1543901544';

const Container = styled.div`
  margin-left: 10px;
  position: relative;
`;

storiesOf('Molecules | Product Card', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <Container>
        <ProductCard
          product={{
            staticId: text('Product ID', 'SOME_ID'),
            displayName: text('Display Name', 'Jacket Potatoe'),
            currentPrice: number('Current Price', 50),
            imgSrc: text('Image Source', exampleImgSrc),
            inStock: boolean('In Stock?', true)
          }}
          href={text('Href', '/')}
          onClick={() => {}}
        />
      </Container>
    ),
    { notes: { markdown: readMe } }
  );
