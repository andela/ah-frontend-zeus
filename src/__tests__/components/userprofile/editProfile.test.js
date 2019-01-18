import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow } from 'enzyme';
import { Editprofile } from '../../../components/userprofile/editprofile';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Editprofile/>', () => {
  const editor = shallow(<Editprofile registerUser={jest.fn()} />);

  it('should render without crashing', () => {
    expect(editor).toMatchSnapshot();
  });
  const push = jest.fn();
  const props = {
    editProfile: () => jest.fn(),
    userprofile: {},
    history:{push}

  };

  it('test component on submit', () => {

    const wrapper = shallow(<Editprofile {...props} />);
    const instance = wrapper.instance();
    instance.onChange({ target: { name: 'name', value: 'value' } });
    const e = { preventDefault: () => {}};

    // instance.uploadPhoto( );
    
    instance.onSubmit(e);
  });
});
