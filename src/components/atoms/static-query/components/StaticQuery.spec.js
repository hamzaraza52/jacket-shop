import React from 'react';
import { useStaticQuery } from 'gatsby';

import { StaticQuery } from './StaticQuery';

const returnedData = 'foo';
const childComponent = jest.fn(() => <div />);

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => returnedData);
});

describe('static query', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('makes a static graphql call to correctly fetch data', () => {
    const query = 'some-query';
    expect(StaticQuery({ children: childComponent, query: query })).toEqual(
      <div />
    );
    expect(useStaticQuery).toHaveBeenCalledWith(query);
    expect(childComponent).toHaveBeenCalledWith(returnedData);
  });

  it('returns null if query is null', () => {
    expect(StaticQuery({ children: childComponent, query: null })).toBe(null);
    expect(useStaticQuery).toHaveBeenCalledWith(null);
    expect(childComponent).toHaveBeenCalledWith(returnedData);
  });

  it('returns null if query is undefined', () => {
    expect(StaticQuery({ children: childComponent, query: undefined })).toBe(
      null
    );
    expect(useStaticQuery).toHaveBeenCalledWith(undefined);
    expect(childComponent).toHaveBeenCalledWith(returnedData);
  });
});
