import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Register } from '../../../components/auth/Register';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Register/>', () => {
  const editor = shallow(<Register registerUser={jest.fn()} />);

  it('should render without crashing', () => {
    expect(editor).toMatchSnapshot();
  });
  const props = {
    registerUser: (newUser, history) => jest.fn(),
    auth: { isAuthenticated: false, user: {} },
    errors: {}
  };

  it('test Register component onchange', () => {
    const wrapper = shallow(<Register {...props} />);
    const instance = wrapper.instance();
    instance.onChange({ target: { name: 'name', value: 'value' } });
    const e = { preventDefault: () => {} };
    instance.onSubmit(e);
  });

  it('tests that the component receives new props', () => {
    const wrapper = shallow(<Register {...props} />);
    const data = {
      errors: {
        errors: {
          name: 'invalid username'
        }
      }
    };
    wrapper.instance().componentWillReceiveProps(data);
    expect(wrapper.instance().state.errors.name).toEqual('invalid username');
  });
});
