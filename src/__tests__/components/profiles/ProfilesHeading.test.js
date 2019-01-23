import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import ProfilesHeading from '../../../components/profiles/ProfilesHeading';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<ProfilesHeading />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ProfilesHeading />);
    expect(wrapper).toMatchSnapshot();
  });
});
