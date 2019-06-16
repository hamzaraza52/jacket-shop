import React from 'react';
import { render } from 'react-testing-library';

import { Price } from './Price';

describe('price', () => {
  it('renders price', () => {
    const { queryByTestId, queryByText } = render(<Price price={50} />);
    expect(queryByTestId('main-price')).toBeTruthy();
    expect(queryByTestId('original-price')).toBeFalsy();
    expect(queryByText('£50.00')).toBeTruthy();
  });

  it('renders with original price', () => {
    const { queryByTestId, queryByText } = render(
      <Price price={29.99} originalPrice={50} />
    );
    expect(queryByTestId('main-price')).toBeTruthy();
    expect(queryByTestId('original-price')).toBeTruthy();
    expect(queryByText('£29.99')).toBeTruthy();
    expect(queryByText('£50.00')).toBeTruthy();
  });

  it('supports custom data values', () => {
    const { container } = render(
      <Price price={50} data-some-custom-value="some-custom-value" />
    );
    expect(
      container.querySelector('[data-some-custom-value="some-custom-value"]')
    ).toBeTruthy();
  });

  describe('does not render if no price', () => {
    it('handles undefined', () => {
      const { container } = render(<Price price={undefined} />);
      expect(container.firstChild).toBeFalsy();
    });

    it('handles null', () => {
      const { container } = render(<Price price={null} />);
      expect(container.firstChild).toBeFalsy();
    });
  });
});
