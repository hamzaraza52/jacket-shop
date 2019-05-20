import React from 'react';
import styled from '@emotion/styled';

export const Card = ({ imgSrc, children, ...props }) => {
  const Container = styled.div` 
    width: 275px;
    height: 400px;
    
    :hover {
      .c-product-card__background {
        transform: scale(1.05);
      }

      .c-product-card__fade {
        opacity: 0.2;
      }

      .c-button {
        opacity: 1;
      }

      .c-product-card__unavailability-message {
        opacity: 1;
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
    overflow: hidden;
    position: absolute;
    transition: 0.3s all;
    top: -20px;
    left: 0px;
    width: 275px;
    height: 400px;
  `;

  const CardFade = styled.div`
    background-color: #2b2b2b;
    height: 400px;
    left: 0px;
    opacity: 0;
    position: absolute;
    transition: 0.3s all;
    top: 0px;
    width: 275px;
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
      <CardFade className="c-product-card__fade" />
      <CardContent data-testid="product-card-molecule" {...props}>
        {children}
      </CardContent>
    </Container>
  );
};
