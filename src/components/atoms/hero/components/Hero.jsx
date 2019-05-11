import React from 'react';
import styled from '@emotion/styled';

export const Hero = props => {
  const { src, height, children } = props;
  if (src) {
    const HeroImage = styled.div`
      width: 100%;
      height: ${height || '512'}px;
      background-image: url(${src});
    `;
    return (
      <HeroImage data-testid="hero-atom" {...props}>
        {children}
      </HeroImage>
    );
  }
  return null;
};
