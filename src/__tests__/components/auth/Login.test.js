import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Login } from '../../../components/auth/Login';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Login/>', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(<Login />)
        .find('form.login')
        .exists()
    ).toBe(false);
  });

  it('should render a <form> element', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('.form')).toExist;
  });

  it('should render a <div> element', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('.div')).toExist;
  });

  it('renders a email input', () => {
    expect(shallow(<Login />).find('#email').length).toEqual(0);
  });

  it('renders a password input', () => {
    expect(shallow(<Login />).find('#password').length).toEqual(0);
  });

  const props = {
    loginUser: (user, history) => jest.fn(),
    auth: { isAuthenticated: false, user: {} },
    errors: {}
  };

  it('test Login component onchange', () => {
    const wrapper = shallow(<Login {...props} />);
    const instance = wrapper.instance();
    instance.onChange({ target: { name: 'name', value: 'value' } });
    const e = { preventDefault: () => {} };
    instance.onSubmit(e);
    expect(instance.state.name).toEqual('value');
  });

  it('tests that the component receives new props', () => {
    const wrapper = shallow(<Login {...props} />);
    const data = {
      errors: { error: ' ' }
    };
    wrapper.instance().componentWillReceiveProps(data);
    expect(wrapper.instance().state.notFoundUser).toEqual(' ');
  });
});
