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
    () => {
      const staticId = text('Product ID', 'SOME_ID');
      const displayName = text('Display Name', 'Jacket Potatoe');
      const price = number('Current Price', 50);
      const inStock = boolean('In Stock?', true);
      return (
        <Container>
          <ProductCard
            product={{
              staticId: staticId,
              displayName: displayName,
              currentPrice: price,
              imgSrc: exampleImgSrc,
              inStock: inStock
            }}
            onClick={() => {}}
          />
        </Container>
      );
    },
    { notes: { markdown: readMe } }
  );
