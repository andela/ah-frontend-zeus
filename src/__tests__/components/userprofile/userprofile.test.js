import Enzyme from 'enzyme';
import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { Userprofile } from '../../../components/userprofile/userprofile';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('test user profile', () => {
  const props = {
    getProfile: () => jest.fn(),
    userprofile: {
      photo: 'http://image.jpg',
      bio: 'I love python',
      fun_fact: 'eating'
    }
  };
  const wrapper = shallow(<Userprofile {...props} />);
  expect(wrapper).toMatchSnapshot();
});
