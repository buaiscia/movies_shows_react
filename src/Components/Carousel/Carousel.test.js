import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Carousel from './Carousel';

configure({ adapter: new Adapter() });


describe('Carousel', () => {
    it('should render correctly', () => {
        const component = shallow(
            <Carousel />
        );
        expect(shallowToJson(component)).toMatchSnapshot();
    });
    it('should have initial redirect state as null', () => {
        const wrapper = shallow(<Carousel />);
        expect(wrapper.state('redirect')).toEqual(null);
    });
    it('should change the redirect state when img clicked', () => {
        const wrapper = shallow(<Carousel />);
        wrapper.find("img").simulate('click', { redirect: { value: '/show' } });
        expect(wrapper.state('redirect')).toEqual('/show');
    });
}

)