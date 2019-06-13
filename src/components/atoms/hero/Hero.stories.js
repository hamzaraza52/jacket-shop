import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hero } from '.';
import readMe from './README.md';

storiesOf('Atoms | Hero', module).add(
  'Default',
  () => (
    <Hero src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
  ),
  { notes: { markdown: readMe } }
);
