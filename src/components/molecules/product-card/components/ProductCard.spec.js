import React from 'react';
import { render } from 'react-testing-library';

import { ProductCard } from './ProductCard';

describe('product card', () => {
  const mockProduct = {
    staticId: 'SWEET_JACKET',
    displayName: 'Sweet Jacket',
    currentPrice: 100.0,
    imgSrc: 'https://some-img-src.png',
    inStock: true
  };

  it('renders the product card if product data is present', () => {
    const { queryByTestId } = render(<ProductCard product={mockProduct} />);
    expect(queryByTestId('product-card-molecule')).toBeTruthy();
  });

  it('renders null if product data is not present', () => {
    const { queryByTestId, container } = render(
      <ProductCard product={undefined} />
    );
    expect(queryByTestId('product-card-molecule')).toBeFalsy();
    expect(container.firstChild).toBe(null);
  });

  it('renders with a custom data-testid', () => {
    const { queryByTestId } = render(
      <ProductCard product={mockProduct} data-testid="some-testid" />
    );
    expect(queryByTestId('product-card-molecule')).toBeFalsy();
    expect(queryByTestId('some-testid')).toBeTruthy();
  });

  describe('display name', () => {
    it('renders the correct text if the product contains data a display name', () => {
      const productName = 'display name';
      const { queryByTestId, queryByText } = render(
        <ProductCard product={{ ...mockProduct, displayName: productName }} />
      );
      expect(queryByTestId('product-card-display-name')).toBeTruthy();
      expect(queryByText(productName)).toBeTruthy();
    });

    it('does not render if the product data does not contain a display name', () => {
      const { queryByTestId } = render(
        <ProductCard product={{ ...mockProduct, displayName: undefined }} />
      );
      expect(queryByTestId('product-card-display-name')).toBeFalsy();
    });
  });

  describe('display price', () => {
    it('renders the correct text if the product contains data a current price', () => {
      const price = 50.0;
      const { queryByTestId, queryByText } = render(
        <ProductCard product={{ ...mockProduct, currentPrice: price }} />
      );
      expect(queryByTestId('product-card-price')).toBeTruthy();
      expect(queryByText(`£50.00`)).toBeTruthy();
    });

    it('does not render if the product data does not contain a current price', () => {
      const { queryByTestId } = render(
        <ProductCard product={{ ...mockProduct, currentPrice: undefined }} />
      );
      expect(queryByTestId('product-card-price')).toBeFalsy();
    });
  });

  describe('container type', () => {
    it('renders a button if an onclick function is present and an href is not present', () => {
      const { queryByTestId, container } = render(
        <ProductCard product={mockProduct} onClick={() => {}} />
      );
      expect(queryByTestId('product-card-molecule')).toBeTruthy();
      expect(container.querySelector('button')).toBeTruthy();
      expect(container.querySelector('a')).toBeFalsy();
    });

    it('renders a link if an href is present', () => {
      const { queryByTestId, container } = render(
        <ProductCard
          product={mockProduct}
          onClick={() => {}}
          href="/some-href/"
        />
      );
      expect(queryByTestId('product-card-molecule')).toBeTruthy();
      expect(container.querySelector('button')).toBeFalsy();
      expect(container.querySelector('a')).toBeTruthy();
    });

    it('does not render a button or a link if the product is out of stock', () => {
      const { queryByTestId, container } = render(
        <ProductCard
          product={{ ...mockProduct, inStock: false }}
          onClick={() => {}}
          href="/some-href/"
        />
      );
      expect(queryByTestId('product-card-molecule')).toBeTruthy();
      expect(container.querySelector('button')).toBeFalsy();
      expect(container.querySelector('a')).toBeFalsy();
    });

    it('does not render a button or a link if neither an onclick function nor an href is present', () => {
      const { queryByTestId, container } = render(
        <ProductCard product={mockProduct} />
      );
      expect(queryByTestId('product-card-molecule')).toBeTruthy();
      expect(container.querySelector('button')).toBeFalsy();
      expect(container.querySelector('a')).toBeFalsy();
    });
  });
});
