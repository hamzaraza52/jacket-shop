import Masthead from './Masthead';
import { render } from 'react-testing-library';

const imgSrc = 'https://peepo.gg/';
const defaultProps = {
    src: imgSrc
};

describe('gimme the loot', () => {
    const renderer = (props = defaultProps) => {
        render(<Masthead { ...props } />);
    };

    it('should render :)', () => {
        
    });

    it('', ( )=> {
        
    });
});
