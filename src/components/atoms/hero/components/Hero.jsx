import React from 'react';
import styled from '@emotion/styled';

export const Hero = props => {
  const src = props?.src;
  if (src) {
    const HeroImage = styled.div`
      width: 100%;
      height: 512px;
      background-image: url(${props.src});
    `;
    return (
      <HeroImage data-testid="hero-atom" {...props}>>
        {props.children}
      </HeroImage>
    );
  }
  return null;
};
