import React from 'react';
import { useStaticQuery } from 'gatsby';

import { StaticQuery } from './StaticQuery';

const returnedData = 'foo';
const childComponent = jest.fn(() => <div/>);

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => returnedData);
});

describe('StaticQuery', () => {
  afterEach(() => {
    jest.resetAllMocks()
  });

  it('makes a static graphql call to correctly fetch data', () => {
    const query = 'some-query';
    StaticQuery({ children: childComponent, query: query });
    expect(useStaticQuery).toHaveBeenCalledWith(query);
    expect(childComponent).toHaveBeenCalledWith(returnedData);
  });

  it('handles null', () => {
    StaticQuery({ children: childComponent, query: null });
    expect(useStaticQuery).not.toHaveBeenCalled();
    expect(childComponent).not.toHaveBeenCalled();
  });

  it('handles undefined', () => {
    StaticQuery({ children: childComponent, query: undefined });
    expect(useStaticQuery).not.toHaveBeenCalled();
    expect(childComponent).not.toHaveBeenCalled();
  });
});
