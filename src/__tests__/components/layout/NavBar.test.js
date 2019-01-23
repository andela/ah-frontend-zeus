import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { NavBar } from '../../../components/layout/NavBar';
import LoggedOutNavBar from '../../../components/layout/LoggedOutNavBar';
import { LoggedInNavBar } from '../../../components/layout/LoggedInNavBar';
import Landing from '../../../components/layout/Landing';
import LinksPopup from '../../../components/layout/LinksPopup';
import Footer from '../../../components/layout/Footer';
import { Link } from 'react-router-dom';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<NavBar/>', () => {
  it('contains <LoggedOutNavBar /> when currentUser is not defined', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.contains(<LoggedOutNavBar />)).toEqual(true);
  });
});

describe('<LoggedOutNavBar/>', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<LoggedOutNavBar />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render three <LoggedOutNavBar/> elements', () => {
    const wrapper = shallow(<LoggedOutNavBar />);
    expect(wrapper.find(Link)).toHaveLength(3);
  });
});

describe('<LoggedInNavBar />', () => {
  it('Contains 6 Links', () => {
    const wrapper = shallow(<LoggedInNavBar logoutUser={jest.fn()} />);
    expect(wrapper.find(Link)).toHaveLength(6);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<LoggedInNavBar logoutUser={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls logoutUser() when button is clicked', () => {
    const logoutUser = jest.fn();
    const wrapper = shallow(
      <LoggedInNavBar
        logoutUser={logoutUser}
        history={{ push: s => console.log('nothing') }}
      />
    );
    wrapper
      .find('li button')
      .first()
      .simulate('click', logoutUser);
    expect(logoutUser).toHaveBeenCalled();
  });
});

describe('<Footer />', () => {
  it('Contains a paragraph', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p')).toHaveLength(1);
  });
});

describe('<Landing />', () => {
  it('Contains 2 Links', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper.find(Link)).toHaveLength(2);
  });
});

describe('<LinksPopup />', () => {
  it('Contains 9 Links', () => {
    const wrapper = shallow(<LinksPopup />);
    expect(wrapper.find(Link)).toHaveLength(8);
  });

  it('First Link is: New Article', () => {
    const wrapper = shallow(<LinksPopup />);
    expect(
      wrapper
        .find(Link)
        .at(0)
        .childAt(0)
        .text()
    ).toEqual('New Article');
  });
});
