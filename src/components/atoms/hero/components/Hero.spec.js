import React from 'react';
import { render } from 'react-testing-library';

import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the Hero component if passed an image src', () => {
    const { queryByTestId } = render(<Hero src="/some-source/image.jpeg" />);
    expect(queryByTestId('hero-atom')).toBeTruthy();
  });

  it('does not render the Hero component if it is not passed an image src', () => {
    const { queryByTestId } = render(<Hero />);
    expect(queryByTestId('hero-atom')).toBeFalsy();
  });

  it('renders children', () => {
    const ChildComponent = () => <div data-testid="child-component" />;
    const { queryByTestId } = render(
      <Hero src="/some-source/image.jpeg">
        <ChildComponent />
      </Hero>
    );
    expect(queryByTestId('child-component')).toBeTruthy();
  });

  describe('snapshot tests', () => {
    it('renders with default props', () => {
      const { container } = render(<Hero src="some-src" />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders with custom props', () => {
      const ChildComponent = () => <div data-testid="child-component" />;
      const { container } = render(
        <Hero src="some-src" height="240px" data-testid="some-testid">
          <ChildComponent />
        </Hero>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
