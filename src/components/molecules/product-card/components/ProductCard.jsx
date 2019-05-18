import React from 'react';

import { Card } from './Card';
import { ProductDetails} from './ProductDetails';
//TODO: replace with button atom when it is finished
import { TEMPORARY_BUTTON } from './TEMPORARY_BUTTON';
import { UnavailabilityMessage } from './UnavailabilityMessage';

export const ProductCard = ({
  product: { staticId, displayName, currentPrice, imgSrc, inStock } = {},
  onClick,
  ...dataAttributes
}) => {
  if (displayName) {
    const isUnavailable = !inStock || !onClick;
    return (
      <Card imgSrc={imgSrc} {...dataAttributes}>
        {isUnavailable ? <UnavailabilityMessage/> : <TEMPORARY_BUTTON onClick={onClick}>Buy Now</TEMPORARY_BUTTON>}
        <ProductDetails displayName={displayName} currentPrice={currentPrice} />
      </Card>
    )
  }
  return null;
};
