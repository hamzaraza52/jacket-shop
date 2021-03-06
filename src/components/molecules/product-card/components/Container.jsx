import styled from '@emotion/styled';

import { cardHeight, cardWidth } from '../constants';

export const Container = styled.div`
  background-color: inherit;
  border: none;
  height: ${cardHeight};
  width: ${cardWidth};
  position: relative;
  display: block;
  overflow: hidden;
  box-shadow: 0 0 1px #cccccc;

  * {
    transition: 0.3s all;
  }

  > * {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .background {
    top: -20px;
  }

  :hover, :focus {
    outline: none;
    
    .background {
      transform: scale(1.05);
    }

    .fade {
      opacity: 0.2;
    }

    .button {
      opacity: 1;
      margin-top: 60%;
    }
  }
`;
