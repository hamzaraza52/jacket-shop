import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { Container } from './Container';
import { cardHeight, cardWidth } from '../constants';

export const Card = ({
  imgSrc,
  disable,
  children,
  href,
  onClick,
  ...props
}) => {
  const CardBackground = styled.div`
    background-image: url(${imgSrc});
    background-color: inherit;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    flex-flow: column;
    overflow: hidden;
    position: absolute;
    transition: 0.3s all;
    top: -20px;
    left: 0;
    width: ${cardWidth};
    height: ${cardHeight};
  `;

  const CardFade = styled.div`
    background-color: #2b2b2b;
    left: 0;
    opacity: 0;
    position: absolute;
    transition: 0.3s all;
    top: 0;
    width: ${cardWidth};
    height: ${cardHeight};
  `;

  const CardContent = styled.div`
    box-shadow: 0 0 2px #cccccc;
    position: absolute;
    top: 0;
    left: 0;
    width: ${cardWidth};
    height: ${cardHeight};
  `;

  const containerElement = disable ? 'div' : href ? Link : 'button';

  return (
    <Container
      as={containerElement}
      data-testid="container"
      onClick={onClick}
      to={href}
    >
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
