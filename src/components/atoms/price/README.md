# Price

The `Price` component takes price and displays it in the correct format. It can also show an original price if a product is discounted.

## Import

To import into a `.jsx` template file use:

```js
import { Price } from '../../../price';
```

## Props

This component supports the following custom props:

- price: `Number`
  - __required__
  - the main price to be displayed.
  
- originalPrice: `Number`
  - __optional__
  - the original price.
  - rendered with a strikethrough if present.
  
## Usage

To use in a `.jsx` file:

```js
<Price 
  price={50}
  originalPrice={60.50}
  data-testid="some-custom-id"
/>
```
