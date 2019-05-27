import React from 'react';

import { Card } from './Card';
import { ProductDetails } from './ProductDetails';
//TODO: replace with button atom when it is finished
import { TEMPORARY_BUTTON } from './TEMPORARY_BUTTON';
import { UnavailabilityMessage } from './UnavailabilityMessage';

export const ProductCard = ({
  product: { staticId, displayName, currentPrice, imgSrc, inStock } = {},
  onClick,
  href,
  ...props
}) => {
  if (displayName) {
    const isUnavailable = !inStock || (!onClick && !href);
    return (
      <Card
        imgSrc={imgSrc}
        disable={isUnavailable}
        href={href}
        onClick={onClick}
        {...props}
      >
        {isUnavailable ? (
          <UnavailabilityMessage />
        ) : (
          <TEMPORARY_BUTTON faux>buy now</TEMPORARY_BUTTON>
        )}
        <ProductDetails displayName={displayName} currentPrice={currentPrice} />
      </Card>
    );
  }
  return null;
};
