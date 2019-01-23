import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { UserProfiles } from '../../../components/profiles/UserProfiles';
import ProfilesHeading from '../../../components/profiles/ProfilesHeading';
import { SingleProfile } from '../../../components/profiles/SingleProfile';

Enzyme.configure({ adapter: new EnzymeAdapter() });

function setup() {
  const props = {
    getUserProfiles: jest.fn(),
    getFollowsForCurrentUser: jest.fn(),
    getFollowersForCurrentUser: jest.fn(),
    username: 'LoggedInUser',
    follows: ['one', 'two'],
    followsFor: '',
    followersFor: '',
    authors: [
      {
        username: 'Username',
        email: 'username@host.com',
        profile: { bio: 'bio', fun_fact: 'fun_fact', photo: 'photo_url' }
      }
    ]
  };

  const wrapper = shallow(<UserProfiles {...props} />);
  return { wrapper, props };
}

describe('<UserProfiles />', () => {
  it('contains a <ProfilesHeading />', () => {
    const { wrapper } = setup();
    expect(wrapper.find(ProfilesHeading)).toHaveLength(1);
  });

  it('matches snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper.find(SingleProfile)).toExist;
    expect(wrapper).toMatchSnapshot();
  });

  it('calls props methods when mounted', () => {
    const { props } = setup();
    expect(props.getUserProfiles).toHaveBeenCalled();
    expect(props.getFollowsForCurrentUser).toHaveBeenCalled();
    expect(props.getFollowersForCurrentUser).toHaveBeenCalled();
  });
});
