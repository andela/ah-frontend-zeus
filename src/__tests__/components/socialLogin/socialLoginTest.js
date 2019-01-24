import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow} from 'enzyme';
import { Google } from '../../../components/auth/Google';
import { Facebook } from '../../../components/auth/Facebook';
import { Login } from '../../../components/auth/Login';
import thunk from 'redux-thunk';
import configureMockStore from  'redux-mock-store'

const middlewares = [thunk]
const mockStore =   configureMockStore

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Google/>', () => {
  const editor = shallow(<Google />);

  it('should render without crashing', () => {
    expect(editor).toMatchSnapshot();
  });
});

describe('<Facebook/>', () => {
  const editor = shallow(<Facebook />);

  it('should render without crashing', () => {
    expect(editor).toMatchSnapshot();
  });
});
