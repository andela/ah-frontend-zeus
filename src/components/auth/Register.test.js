import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from "react";
import { shallow, mount } from "enzyme";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Register from './Register';
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Register/>', () => {
    const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState ={
    user: {}
  };

  const store = mockStore({ ...initialUserState });
  const initialState = {
    name: '',
    email: '',
    password: '',
    errors: {}
  };
  const editor = shallow(<Register registeruser={jest.fn()} />);
  
  it("should render without crashing", () => {
    expect(editor).toMatchSnapshot();
  });
  });
  