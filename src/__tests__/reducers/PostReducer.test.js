import { FETCH_COMMENTS, NEW_COMMENT } from '../../constants/ActionTypes';
import postReducer from '../../reducers/PostReducer';

const initialStore = { comments: [], comment: {} };

describe('test auth reducer', () => {
  it('should return new state on getting all comments of single article', () => {
    const comment = { comments: [] };
    expect(
      postReducer(undefined, { type: FETCH_COMMENTS, payload: comment })
    ).toMatchObject({});
  });

  it('should return new state on posting comments on  article', () => {
    const comment = { comment: {} };
    expect(
      postReducer(undefined, { type: NEW_COMMENT, payload: comment })
    ).toMatchObject({});
  });
});
