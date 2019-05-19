import React from 'react';
import styled from '@emotion/styled';

export const Card = ({ imgSrc, children, ...props }) => {
  const Container = styled.div`
    :hover {
      .c-product-card__background {
        filter: blur(20px);
      }

      .c-button {
        display: flex;
      }

      .c-product-card__unavailability-message {
        display: flex;
      }
    }
  `;

  const CardBackground = styled.div`
    background-image: url(${imgSrc});
    background-color: #f7f7f7;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    flex-flow: column;
    transition: 0.3s all;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 275px;
    height: 400px;
  `;

  const CardContent = styled.div`
    box-shadow: 0px 0px 2px #cccccc;
    width: 275px;
    height: 400px;
    position: absolute;
    top: 0px;
    left: 0px;
  `;

  return (
    <Container>
      <CardBackground
        className="c-product-card__background"
        data-testid="product-card-background"
      />
      <CardContent data-testid="product-card-molecule" {...props}>
        {children}
      </CardContent>
    </Container>
  );
};
