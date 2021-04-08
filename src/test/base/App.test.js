import { shallow } from 'enzyme';
import App from '../../App';

describe('Test in <App />', () => {
    test('should return the correct component', () => {
        const wrapper = shallow( <App />);
        expect(wrapper).toMatchSnapshot();
    });
});