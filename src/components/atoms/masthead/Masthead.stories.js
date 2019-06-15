import React from 'react';
import { storiesOf } from '@storybook/react';
import { Masthead } from './components/Masthead';

storiesOf('atoms | Masthead', module).add('with logo', () => (
  <Masthead src="http://www.stickpng.com/assets/images/5845cd430b2a3b54fdbaecf8.png" />
));

storiesOf('atoms | Masthead', module).add('without logo src', () => (
  <Masthead />
));
