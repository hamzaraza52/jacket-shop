import React from 'react';
import { render } from 'react-testing-library';
import { Button } from './Button';

describe('button', () => {
  describe('rendering conditions', () => {
    it('renders if passed href', () => {});
    it('renders if passed onClick', () => {});
    it('does not render if no onClick, or href are passed', () => {});
    it('does not render if both onClick, or href are passed', () => {});
  });

  describe('default sizing and behaviour', () => {});

  describe('other props', () => {
    it('renders text passed to it', () => {});
    it('renders text with font size passed to it', () => {});
    it('renders text with font family passed to it', () => {});
    it('renders according to colour set passed to it', () => {});
  });
});
