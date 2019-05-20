# Hero

The `Hero` component takes an image and displays it the full width of the screen.

## Import

To import into a `.jsx` template file use:

```js
import { Hero } from '../atoms';
```

## Props

This component supports the following custom props:

- src: `String`
  - __required__
  - the image source for the background.
  - must be a url.
  
- height: `String`
  - __optional__
  - sets the height of the hero image.
  - defaults to 512px.
  - must include a unit of measurement, e.g. `px`, `%`, `em`, etc.
  
- data-testid: `String`
  - __optional__
  - defaults to "hero-atom".
  - use for testing.
  
## Usage

To use in a `.jsx` file:

```js
<Hero src="https://some-src.ca" />
```
With child components:
```js
<Hero
  src="https://some-src.ca"
  data-testid="example-testid"
  height="200px"
>
  <em>Some Text!</em>
</Hero>
```

