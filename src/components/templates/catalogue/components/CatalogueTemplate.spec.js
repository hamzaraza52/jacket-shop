import React from 'react';
import { render } from 'react-testing-library';

import { CatalogueTemplate } from "./CatalogueTemplate";

describe('catalogue template', () => {
  it('renders the hero component', () => {
    const { getByTestId } = render(<CatalogueTemplate />);
    expect(getByTestId('hero-atom')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const { container } = render(<CatalogueTemplate />);
    expect(container.firstChild).toMatchSnapshot();
  })
})
