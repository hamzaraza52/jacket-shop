import React from 'react';
import styled from '@emotion/styled';

export const Hero = props => {
  const { src, height, children } = props;
  if (src) {
    const HeroImage = styled.div`
      width: 100vw;
	    max-width: 100vw;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
	    position: relative;
      height: ${height || '512px'};
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
