import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, object, select, text } from '@storybook/addon-knobs/react';

import { Button } from '.';

const styles = {
  textAlign: 'center'
};
const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>;

const conditionOptions = ['', 'disabled'];

storiesOf('Button', module)
  .addDecorator(CenterDecorator)
  .addDecorator(withKnobs)
  .add('with onClick', () => (
    <Button
      onClick={action('clicked')}
      text={text('text', 'click me')}
      condition={select('condition', conditionOptions, '')}
    />
  ))
  .add('with href', () => (
    <Button
      href="#"
      text={text('text', 'click me')}
      condition={select('condition', conditionOptions, '')}
    />
  ))
  .add('with href and onClick', () => (
    <Button
      href="#"
      onClick={action('clicked')}
      text={text('text', 'click me')}
      condition={select('condition', conditionOptions, '')}
    />
  ))
  .add('with no href or onClick', () => (
    <Button
      text={text('text', 'click me')}
      condition={select('condition', conditionOptions, '')}
    />
  ));
