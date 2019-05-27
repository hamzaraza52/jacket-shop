import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { Container } from './Container';

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
