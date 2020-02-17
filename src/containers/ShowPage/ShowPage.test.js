import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ShowPage from './ShowPage';


configure({ adapter: new Adapter() });


describe('ShowPage', () => {
    it('should render correctly', () => {
        const output = shallow(
            <ShowPage />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });

}

)