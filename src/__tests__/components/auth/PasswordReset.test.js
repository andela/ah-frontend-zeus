import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { PasswordReset } from '../../../components/auth/PasswordReset';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<PasswordReset/>', () => {
  const passwordResetTester = shallow(
    <PasswordReset passwordReset={jest.fn()} />
  );

  test('should render without crashing', () => {
    expect(passwordResetTester).toMatchSnapshot();
  });

  const props = {
    passwordReset: email => jest.fn(),
    errors: {}
  };

  test('component will recieve a user email as new props', () => {
    const wrapper = shallow(<PasswordReset {...props} />);
    const data = {
      errors: {
        user: {
          email: 'User not found'
        }
      }
    };
    wrapper.instance().componentWillReceiveProps(data);
    // console.log(wrapper.instance().props)
    expect(wrapper.instance().state.errors.user.email).toEqual(
      'User not found'
    );
  });

  test('test component onChange', () => {
    const wrapper = shallow(<PasswordReset {...props} />);
    const instance = wrapper.instance();
    instance.onChange({ target: { name: 'name', value: 'value' } });
    const e = { preventDefault: () => {} };
    instance.onSubmit(e);
  });
});
