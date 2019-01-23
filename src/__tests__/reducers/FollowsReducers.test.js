import {
  GET_PROFILES_REQUEST,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  FOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAILURE,
  GET_FOLLOWS_REQUEST,
  GET_FOLLOWS_SUCCESS,
  GET_FOLLOWS_FAILURE,
  GET_FOLLOWERS_REQUEST,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAILURE
} from '../../constants/ActionTypes';
import {
  isRequesting,
  networkError,
  fetchError,
  currentUser,
  userWhoseFollowsInfoIsDisplayed,
  authors
} from '../../reducers/FollowsReducers';

describe('isRequesting Reducer', () => {
  it('returns true for every REQUEST action type', () => {
    expect(isRequesting(undefined, { type: FOLLOW_REQUEST })).toEqual(true);
    expect(isRequesting(undefined, { type: UNFOLLOW_REQUEST })).toEqual(true);
    expect(isRequesting(undefined, { type: GET_FOLLOWS_REQUEST })).toEqual(
      true
    );
    expect(isRequesting(undefined, { type: GET_FOLLOWERS_REQUEST })).toEqual(
      true
    );
    expect(isRequesting(undefined, { type: GET_PROFILES_REQUEST })).toEqual(
      true
    );
  });

  it('returns false for every action type that is not a request', () => {
    expect(isRequesting(undefined, { type: FOLLOW_SUCCESS })).toEqual(false);
    expect(isRequesting(undefined, { type: UNFOLLOW_SUCCESS })).toEqual(false);
    expect(isRequesting(undefined, { type: GET_PROFILES_SUCCESS })).toEqual(
      false
    );
    expect(isRequesting(undefined, { type: UNFOLLOW_FAILURE })).toEqual(false);
  });
});

describe('networkError Reducer', () => {
  it('returns true for every network FAILURE', () => {
    expect(
      networkError(undefined, { type: FOLLOW_FAILURE, error: 'network' })
    ).toEqual(true);
    expect(
      networkError(undefined, { type: UNFOLLOW_FAILURE, error: 'network' })
    ).toEqual(true);
    expect(
      networkError(undefined, { type: GET_FOLLOWS_FAILURE, error: 'network' })
    ).toEqual(true);
    expect(
      networkError(undefined, { type: GET_FOLLOWERS_FAILURE, error: 'network' })
    ).toEqual(true);
    expect(
      networkError(undefined, { type: GET_PROFILES_FAILURE, error: 'network' })
    ).toEqual(true);
  });

  it('returns false for every action that is not a network FAILURE', () => {
    expect(networkError(undefined, { type: FOLLOW_FAILURE })).toEqual(false);
    expect(networkError(undefined, { type: FOLLOW_REQUEST })).toEqual(false);
    expect(networkError(undefined, { type: UNFOLLOW_SUCCESS })).toEqual(false);
    expect(networkError(undefined, { type: GET_PROFILES_FAILURE })).toEqual(
      false
    );
  });
});

describe('fetchError Reducer', () => {
  it('returns an error message for every non-network FAILURE', () => {
    expect(
      fetchError('', {
        type: GET_PROFILES_FAILURE,
        message: 'Could not fetch profiles.'
      })
    ).toEqual('Could not fetch profiles.');
    expect(
      fetchError('', {
        type: GET_FOLLOWERS_FAILURE,
        message: 'Could not get followers.'
      })
    ).toEqual('Could not get followers.');
    expect(
      fetchError('', {
        type: GET_FOLLOWS_FAILURE,
        message: 'Failed to retrieve the users you are following.'
      })
    ).toEqual('Failed to retrieve the users you are following.');
    expect(
      fetchError('', {
        type: UNFOLLOW_FAILURE,
        message: 'Failed to unfollow.'
      })
    ).toEqual('Failed to unfollow.');
  });

  it('returns an empty string for every network FAILURE', () => {
    expect(
      fetchError('', {
        type: UNFOLLOW_FAILURE,
        error: 'network'
      })
    ).toEqual('');
    expect(
      fetchError('', {
        type: FOLLOW_FAILURE,
        error: 'network'
      })
    ).toEqual('');
    expect(
      fetchError('', {
        type: GET_PROFILES_FAILURE,
        error: 'network'
      })
    ).toEqual('');
    expect(
      fetchError('', {
        type: GET_FOLLOWERS_FAILURE,
        error: 'network'
      })
    ).toEqual('');
    expect(
      fetchError('', {
        type: GET_FOLLOWS_FAILURE,
        error: 'network'
      })
    ).toEqual('');
  });

  it('returns an empty string for every action type that is not a FAILURE', () => {
    expect(
      fetchError('', {
        type: GET_PROFILES_SUCCESS
      })
    ).toEqual('');
    expect(
      fetchError('', {
        type: FOLLOW_SUCCESS
      })
    ).toEqual('');
    expect(
      fetchError('', {
        type: UNFOLLOW_REQUEST
      })
    ).toEqual('');
  });
});

describe('currentUser Reducer', () => {
  it("adds the current user's followings after a GET_FOLLOWS_SUCCESS", () => {
    const current = { username: 'someone', followings: [], followers: [] };
    expect(
      currentUser(current, {
        type: GET_FOLLOWS_SUCCESS,
        user: 'current',
        follows: ['followed name']
      })
    ).toEqual({
      username: 'someone',
      followings: ['followed name'],
      followers: []
    });
  });

  it("adds the current user's followers after a GET_FOLLOWERS_SUCCESS", () => {
    const current = { username: 'someone', followings: [], followers: [] };
    expect(
      currentUser(current, {
        type: GET_FOLLOWERS_SUCCESS,
        user: 'current',
        followers: ['follower name']
      })
    ).toEqual({
      username: 'someone',
      followings: [],
      followers: ['follower name']
    });
  });

  it("updates the current user's followings after a FOLLOW_SUCCESS", () => {
    const current = {
      username: 'someone',
      followings: ['Cena'],
      followers: []
    };
    expect(
      currentUser(current, {
        type: FOLLOW_SUCCESS,
        followed: 'Jack Sparrow'
      })
    ).toEqual({
      username: 'someone',
      followings: ['Cena', 'Jack Sparrow'],
      followers: []
    });
  });

  it("updates the current user's followings after a UNFOLLOW_SUCCESS", () => {
    const current = {
      username: 'someone',
      followings: ['Cena', 'David Spencer'],
      followers: []
    };
    expect(
      currentUser(current, {
        type: UNFOLLOW_SUCCESS,
        unfollowed: 'David Spencer'
      })
    ).toEqual({
      username: 'someone',
      followings: ['Cena'],
      followers: []
    });
  });

  it('updates current user only when follow/unfollow info is changed', () => {
    const current = {
      username: 'someone',
      followings: ['Cena', 'David Spencer'],
      followers: []
    };
    expect(
      currentUser(current, {
        type: GET_FOLLOWS_SUCCESS,
        user: 'not current',
        followings: []
      })
    ).toEqual({
      username: 'someone',
      followings: ['Cena', 'David Spencer'],
      followers: []
    });
    expect(
      currentUser(current, {
        type: GET_FOLLOWERS_SUCCESS,
        user: 'not current',
        followings: []
      })
    ).toEqual({
      username: 'someone',
      followings: ['Cena', 'David Spencer'],
      followers: []
    });
    expect(
      currentUser(current, {
        type: FOLLOW_FAILURE
      })
    ).toEqual({
      username: 'someone',
      followings: ['Cena', 'David Spencer'],
      followers: []
    });
  });
});

describe('userWhoseFollowsInfoIsDisplayed Reducer', () => {
  it('updates name and followings after a GET_FOLLOWS_SUCCESS', () => {
    const user = { username: '', followings: [], followers: [] };
    expect(
      userWhoseFollowsInfoIsDisplayed(user, {
        type: GET_FOLLOWS_SUCCESS,
        user: 'Sparrow',
        follows: ['Jack', 'Thor']
      })
    ).toEqual({
      username: 'Sparrow',
      followings: ['Jack', 'Thor'],
      followers: []
    });
  });

  it('updates name and followers after a GET_FOLLOWERS_SUCCESS', () => {
    const user = { username: '', followings: [], followers: [] };
    expect(
      userWhoseFollowsInfoIsDisplayed(user, {
        type: GET_FOLLOWERS_SUCCESS,
        user: 'Sparrow',
        followers: ['Jack', 'Thor']
      })
    ).toEqual({
      username: 'Sparrow',
      followings: [],
      followers: ['Jack', 'Thor']
    });
  });

  it('returns the same data for non-related action types', () => {
    const user = { username: '', followings: [], followers: [] };
    expect(
      userWhoseFollowsInfoIsDisplayed(user, {
        type: GET_FOLLOWS_SUCCESS,
        user: 'current'
      })
    ).toEqual({ username: '', followings: [], followers: [] });
    expect(
      userWhoseFollowsInfoIsDisplayed(user, {
        type: GET_FOLLOWERS_SUCCESS,
        user: 'current'
      })
    ).toEqual({ username: '', followings: [], followers: [] });
    expect(
      userWhoseFollowsInfoIsDisplayed(user, { type: FOLLOW_REQUEST })
    ).toEqual({ username: '', followings: [], followers: [] });
  });
});

describe('authors Reducer', () => {
  it('returns a list of authors after a GET_PROFILES_SUCCESS', () => {
    expect(
      authors(undefined, {
        type: GET_PROFILES_SUCCESS,
        authors: [{ username: 'Isaac' }, { username: 'Tomas' }]
      })
    ).toEqual([{ username: 'Isaac' }, { username: 'Tomas' }]);
  });

  it('returns same list when action type is not GET_PROFILES_SUCCESS', () => {
    expect(
      authors([{ username: 'Pius' }], {
        type: GET_PROFILES_REQUEST
      })
    ).toEqual([{ username: 'Pius' }]);
  });
});
