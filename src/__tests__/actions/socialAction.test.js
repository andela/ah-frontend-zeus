import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  responseFacebook,
  responseGoogle,
  fetchUser
} from '../../actions/socialAction';
import { LOGIN_SUCCESS } from '../../constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const API_HOST_URL = process.env.API_URL;

describe('Google login ', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('Tests signing in with Google', () => {
    let response = { tokenId: 'sdhhsdhjhjsdfhfshjshj', w3: { ig: '' } };
    let token = { auth_token: 'RTYRTTRURTUR' };
    let data = { user: { auth_token: 'RTYRTTRURTUR' } };

    fetchMock.post(`${API_HOST_URL}/social/auth/google/`, {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user: token })
    });
    const expectedActions = [{type: LOGIN_SUCCESS}];
    const store = mockStore({});

    return store.dispatch(responseGoogle(response)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Facebook login ', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('Tests signing in with facebook', () => {
    let response = { tokenId: 'sdhhsdhjhjsdfhfshjshj' };
    let token = { auth_token: 'RTYRTTRURTUR' };
    let data = { user: { auth_token: 'RTYRTTRURTUR' } };

    fetchMock.post(`${API_HOST_URL}/social/auth/facebook/`, {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user: token })
    });
    const expectedActions = [];
    const store = mockStore({});

    return store.dispatch(responseFacebook(response)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
