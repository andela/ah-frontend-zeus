import React from 'react';
import Enzyme from 'enzyme';
import configureMockStore from 'redux-mock-store';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { passwordReset } from '../../actions/authPasswordReset';
import { GET_ERRORS } from '../../constants/ActionTypes';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const store = mockStore();
const API_HOST_URL = process.env.API_URL;

test('test passwordreset action', () => {
  const responseData = {
    user: {
      message: 'Check your email for the password reset link',
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNla2F5YXNpbkB5YWhvby5jb20ifQ.krYpY1RW4VjT3FKjQKkDB6UijTZEPTYT6kBeV9h_0wY'
    }
  };

  const expectedData = {
    message: 'Check your email for the password reset link',
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNla2F5YXNpbkB5YWhvby5jb20ifQ.krYpY1RW4VjT3FKjQKkDB6UijTZEPTYT6kBeV9h_0wY'
  };
  const url = `${API_HOST_URL}/users/password_reset/`;

  fetchMock.postOnce(url, {
    body: responseData
  });

  const expectedActions = [
    {
      type: GET_ERRORS,
      payload: expectedData
    }
  ];

  return store
    .dispatch(passwordReset('email'))
    .then(() => expect(store.getActions()).toEqual(expectedActions));
  //   expect(store.getActions()).toEqual(expectedActions);
});
