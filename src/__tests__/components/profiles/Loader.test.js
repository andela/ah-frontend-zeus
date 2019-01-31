import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Loader from '../../../components/profiles/Loader';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Loader />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
