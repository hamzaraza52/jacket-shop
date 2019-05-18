import { formatPrice } from './format-price';

describe('format price', () => {
  it('formats integers', () => {
    expect(formatPrice(5)).toEqual('£5.00');
  });

  it('formats floating point numbers', () => {
    expect(formatPrice(12.75)).toEqual('£12.75');
  });

  it('returns an empty string if no value is given', () => {
    expect(formatPrice()).toEqual('');
  });
});
