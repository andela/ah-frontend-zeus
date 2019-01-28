import { loginUser, registerUser } from '../../actions/authActions';
import fetchMock from 'fetch-mock';
import { createMemoryHistory } from 'history';

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
