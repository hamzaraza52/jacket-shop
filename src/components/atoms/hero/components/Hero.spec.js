import React from 'react';
import { render } from 'react-testing-library';

import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the Hero component if passed an image src', () => {
    const { queryByTestId } = render(<Hero src="/some-source/image.jpeg" />);
    expect(queryByTestId('hero-atom')).toBeTruthy();
  });

  it('does not render the Hero component if it is not passed an image src', () => {
    const { queryByTestId, container } = render(<Hero />);
    expect(queryByTestId('hero-atom')).toBeFalsy();
    expect(container.firstChild).toBe(null);
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

  it('renders the Hero component with a custom data-test-id', () => {
    const { queryByTestId } = render(
      <Hero src="/some-source/image.jpeg" data-testid="custom-testid" />
    );
    expect(queryByTestId('custom-testid')).toBeTruthy();
    expect(queryByTestId('hero-atom')).toBeFalsy();
  });
});
