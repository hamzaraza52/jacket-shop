import React from 'react';
import styled from '@emotion/styled';

import { formatPrice } from '../../../../utils/format-price/format-price';

export const ProductDetails = ({ displayName, currentPrice }) => {
  const TextContainer = styled.div`
    background-color: rgba(220, 220, 220, 0.6);
    bottom: 0;
    display: flex;
    flex-flow: column;
    font: 400 15px arial;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    width: 100%;

    b:first-of-type {
      margin-top: 0.5em;
    }

    p:last-child {
      margin-bottom: 0.5em;
    }
  `;

  const StyledText = styled.p(({ light }) => ({
    textAlign: 'center',
    marginTop: '0',
    height: '1.2em',
    font: '400 1em arial',
    color: `#${light ? '9b9b9b' : '1c1c1c'}`
  }));

  return (
    <TextContainer>
      {displayName && (
        <StyledText as="b" data-testid="product-card-display-name">
          {displayName}
        </StyledText>
      )}
      {currentPrice && (
        <StyledText light data-testid="product-card-price">
          {formatPrice(currentPrice)}
        </StyledText>
      )}
    </TextContainer>
  );
};
