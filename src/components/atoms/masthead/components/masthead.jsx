import React from 'react';
import styled from '@emotion/styled';

export const Masthead = ({ src, children, ...props }) => {
  
  if (!src) return null;

  const mastheadHeight = 60;
  const logoSize = 50;

  const Container = styled.div`
    width: 100%;
    height: ${mastheadHeight}px;
    display: flex;
    align-items: center;
    background-color: black;
  `;   
  
  const Logo = styled.img`
    width: ${logoSize}px;
    height: ${logoSize}px;
    margin: 0 10px;
    display: inline-block;
    vertical-align: middle;
  `;

  const Title = styled.h1`
    margin: 0 10px;
    color: white;
    display: inline-block;
    vertical-align: middle;
    font-family: 'Acme', sans-serif;
  `;

  return (
    <Container>
      <Logo src={src} />
      <Title>Peepo Shop</Title>
    </Container>
  );
};
