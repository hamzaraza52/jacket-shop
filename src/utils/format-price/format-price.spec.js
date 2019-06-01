import { formatPrice } from './format-price';

describe('format price', () => {
  it('formats integers', () => {
    expect(formatPrice(5)).toEqual('£5.00');
  });

  it('formats decimal numbers', () => {
    expect(formatPrice(12.75)).toEqual('£12.75');
  });

  it('returns an empty string if an undefined price is given', () => {
    expect(formatPrice(undefined)).toEqual('');
  });

  it('returns an empty string if a null price is given', () => {
    expect(formatPrice(null)).toEqual('');
  });
});
