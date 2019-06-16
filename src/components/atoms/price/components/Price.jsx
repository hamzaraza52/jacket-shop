import React from 'react';
import styled from '@emotion/styled';

import { formatPrice } from '../../../../utils/format-price/format-price';

export const Price = ({ price, originalPrice, ...props }) => {
  if (price) {
    const Container = styled.div`
      display: flex;
      justify-content: center;
    `;
    const PriceText = styled.p(({ strikethrough }) => ({
      textDecoration: strikethrough && 'line-through',
      font: `400 ${strikethrough ? '0.8em' : '1em'} arial`,
      margin: strikethrough ? '0 5px 0 0' : 0,
      color: strikethrough ? '#bababa' : '#3889bc'
    }));
    return (
      <Container>
        {originalPrice && (
          <PriceText strikethrough data-testid="original-price">
            {formatPrice(originalPrice)}
          </PriceText>
        )}
        <PriceText data-testid="main-price" {...props}>
          {formatPrice(price)}
        </PriceText>
      </Container>
    );
  }
  return null;
};
