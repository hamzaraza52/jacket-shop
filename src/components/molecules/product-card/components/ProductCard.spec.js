import React from 'react';
import { render } from 'react-testing-library';

import { ProductCard } from './ProductCard';

describe('product card', () => {
  const mockProduct = {
    staticId: 'SWEET_JACKET',
    displayName: 'Sweet Jacket',
    currentPrice: 100.0,
    imgSrc: 'https://some-img-src.png'
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

  describe('button', () => {
    it('renders if an onclick function is present', () => {
      const { queryByTestId } = render(
        <ProductCard product={mockProduct} onClick={() => {}} />
      );
      expect(queryByTestId('button-atom')).toBeTruthy();
    });

    it('renders an unavailable message instead if an onclick function is not present', () => {
      const { queryByTestId } = render(
        <ProductCard product={mockProduct} onClick={undefined} />
      );
      expect(queryByTestId('button-atom')).toBeFalsy();
      expect(queryByTestId('unavailable-message')).toBeTruthy();
    });

    it('fires the onClick function when the button is pressed', () => {
      const onClick = () => {};
      const { queryByTestId } = render(
        <ProductCard product={mockProduct} onClick={onClick} />
      );
      const button = queryByTestId('button-atom');
      expect(button).toBeTruthy();
      button.dispatchEvent(new MouseEvent('click'));
      expect(onClick).toHaveBeenCalled();
    });
  });
});
