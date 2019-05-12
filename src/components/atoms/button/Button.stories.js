import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '.';

storiesOf('Button', module)
  .add('with onClick', () => (
    <Button onClick={action('clicked')} text="words to this effect" />
  ))
  .add('with onClick and disabled', () => (
    <Button
      onClick={action('clicked')}
      text="words to this effect"
      condition="disabled"
    />
  ))
  .add('with href', () => <Button href="#" text="words to this effect" />)
  .add('with href and onClick', () => (
    <Button href="#" onClick={action('clicked')} text="words to this effect" />
  ))
  .add('with no href or onClick', () => <Button text="words to this effect" />);
