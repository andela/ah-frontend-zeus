import GET_ERRORS from '../constants/ActionTypes';
import authReducer from '../reducers/authReducer';

const initialStore = {
  user: {}
};

describe('test auth reducer', () => {
  it('should return new state on SIGNUP SUCCESS type', () => {
    const newUser = { isAuthenticated: false, user: {} };
    expect(
      authReducer(undefined, { type: GET_ERRORS, payload: newUser })
    ).toMatchObject(newUser);
  });
});
