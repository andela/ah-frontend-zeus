import { loginUser, registerUser } from '../../actions/authActions';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { GET_ERRORS } from '../../constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const data = {
  user: {
    email: 'patra@mail.com',
    username: 'patra',
    token: 'eyJ0eXAiOiJ1QiLCJh.eyJpZCI6MTQzMTAxN30.DUkUyNISyfAt6jM_sLV7gWo'
  }
};

describe('request', () => {
  it('Should return all tasks', async () => {
    const API_HOST_URL = process.env.API_URL;
    fetchMock.post(`${API_HOST_URL}/users/login/`, data);
    const userData = {};
    const history = createMemoryHistory('/articles');
    const resp = await loginUser(userData, history);
    const expected = new Promise(() => {});
    expect(resp()).toEqual(expected);
  });
});

describe('registerUser() action', () => {
  afterEach(() => fetchMock.restore());

  it('returns errors given incorrect data', () => {
    const API_HOST_URL = process.env.API_URL;
    fetchMock.postOnce(`${API_HOST_URL}/users/`, {
      'Content-Type': 'application/json',
      body: {
        errors: {
          username:
            'Username should start with letters and sometimes include underscores and numbers'
        }
      }
    });
    const invalidData = {
      user: {
        username: '&&&&',
        email: 'someone@host.com',
        password: 'invalidpassword'
      }
    };
    const store = mockStore();
    const expectedActions = [
      {
        type: GET_ERRORS,
        payload: {
          errors: {
            username:
              'Username should start with letters and sometimes include underscores and numbers'
          }
        }
      }
    ];
    store
      .dispatch(registerUser(invalidData))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
