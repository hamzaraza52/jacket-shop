import styled from '@emotion/styled';
import { cardHeight, cardWidth } from '../constants';

export const Container = styled.div`
  background-color: inherit;
  border: none;
  height: ${cardHeight};
  width: ${cardWidth};

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
