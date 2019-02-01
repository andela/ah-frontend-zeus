import GET_ERRORS from '../../constants/ActionTypes';
import searchReducer from '../../reducers/searchReducer';

const initialStore = {
  items: {}
};

describe('test search reducer', () => {
  it('should returns a search type', () => {
    const items = { isAuthenticated: false, items: {} };
    expect(
      searchReducer(undefined, { type: GET_ERRORS, payload: items })
    ).toMatchObject({"items" : {}});
  });
});
