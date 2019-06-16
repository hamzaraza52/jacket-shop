import React from 'react';
import styled from '@emotion/styled';

import { Price } from '../../../atoms';

export const ProductDetails = ({
  displayName,
  currentPrice,
  originalPrice
}) => {
  const TextContainer = styled.div`
    background-color: #ffffff;
    bottom: 0;
    display: flex;
    flex-flow: column;
    padding: 8px 0 8px;
    position: absolute;
    width: 100%;

    * {
      margin: 0;
    }
  `;

  const StyledText = styled.p(({ light }) => ({
    textAlign: 'center',
    height: '1.2em',
    font: '400 1em arial',
    color: `#${light ? '9b9b9b' : '1c1c1c'}`
  }));

  const StyledPrice = styled(Price)`
    text-align: center;
  `;

  return (
    <TextContainer>
      {displayName && (
        <StyledText as="b" data-testid="product-card-display-name">
          {displayName}
        </StyledText>
      )}
      {currentPrice && (
        <StyledPrice
          price={currentPrice}
          originalPrice={originalPrice}
        />
      )}
    </TextContainer>
  );
};
