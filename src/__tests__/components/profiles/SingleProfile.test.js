import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { SingleProfile } from '../../../components/profiles/SingleProfile';
import { Link } from 'react-router-dom';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<SingleProfile />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<SingleProfile />);
    expect(wrapper).toMatchSnapshot();
  });

  it('contains 2 Links', () => {
    const wrapper = shallow(<SingleProfile />);
    expect(wrapper.find(Link)).toHaveLength(2);
  });

  it('contains 3 paragraphs', () => {
    const wrapper = shallow(<SingleProfile />);
    expect(wrapper.find('p')).toHaveLength(3);
  });

  it('calls a followUser prop when isFollowing == false', () => {
    let followUser = jest.fn();
    const wrapper = shallow(
      <SingleProfile isFollowing={false} followUser={followUser} />
    );
    wrapper.find('button').simulate('click');
    expect(followUser).toHaveBeenCalled();
  });

  it('calls a unfollowUser prop when isFollowing == true', () => {
    let unfollowUser = jest.fn();
    const wrapper = shallow(
      <SingleProfile isFollowing={true} unfollowUser={unfollowUser} />
    );
    wrapper.find('button').simulate('click');
    expect(unfollowUser).toHaveBeenCalled();
  });
});
