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
    flex-flow: column;
  `;

  const CardFade = styled.div`
    background-color: #2b2b2b;
    opacity: 0;
  `;

  const getContainerElement = () => {
    if (disable) return 'div';
    if (href) return Link;
    return 'button';
  };

  return (
    <Container
      as={getContainerElement()}
      onClick={onClick}
      to={href}
      data-testid="product-card-molecule"
      {...props}
    >
      <CardBackground
        className="background"
        data-testid="product-card-background"
      />
      <CardFade className="fade" />
      <div>{children}</div>
    </Container>
  );
};
