import React from 'react';
import { Masthead } from './Masthead';
import { render } from 'react-testing-library';

const imgSrc = 'https://peepo.gg/';
const defaultProps = {
    src: imgSrc
};

describe('Masthead component', () => {
    const renderer = props => render(<Masthead { ...props } />);

    it('should render correctly)', () => {
        const { getByTestId } = renderer(defaultProps);
        expect(getByTestId('masthead-container')).toBeTruthy();
    });

    it('should render correctly without props)', () => {
        const { getByTestId } = renderer();
        expect(getByTestId('masthead-container')).toBeTruthy();
    });
});
