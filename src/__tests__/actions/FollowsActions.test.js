import * as actions from '../../actions/FollowsActions';
import * as types from '../../constants/ActionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const API_HOST_URL = process.env.API_URL;

describe('getUserProfiles() action', () => {
  afterEach(() => fetchMock.restore());

  it('dispatches GET_PROFILES_SUCCESS after fetching all users', () => {
    fetchMock.getOnce(`${API_HOST_URL}/authors/`, {
      status: 200,
      body: {
        authors: [{ username: 'isaac', email: 'isaacongebo@gmail.com' }]
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const expected = [
      { type: types.GET_PROFILES_REQUEST },
      {
        type: types.GET_PROFILES_SUCCESS,
        authors: [{ username: 'isaac', email: 'isaacongebo@gmail.com' }]
      }
    ];
    const store = mockStore({ authors: [] });
    store
      .dispatch(actions.getUserProfiles())
      .then(() => expect(store.getActions()).toEqual(expected));
  });

  it('dispatches GET_PROFILES_FAILURE incase of an error', () => {
    fetchMock.getOnce(`${API_HOST_URL}/authors/`, {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const expected = [
      { type: types.GET_PROFILES_REQUEST },
      {
        type: types.GET_PROFILES_FAILURE,
        error: 'No data.',
        message:
          'Something wrong happened. Make sure your request token is well set.'
      }
    ];
    const store = mockStore();
    store
      .dispatch(actions.getUserProfiles())
      .then(() => expect(store.getActions()).toEqual(expected));
  });
});

describe('followUser() action', () => {
  afterEach(() => fetchMock.restore());

  it('dispatches FOLLOW_SUCCESS after posting a follow', () => {
    console.log(API_HOST_URL);
    fetchMock.postOnce(`${API_HOST_URL}/profiles/Sparrow/follows/`, {
      status: 201,
      body: { success: 'Successfully followed.' },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const expected = [
      { type: types.FOLLOW_REQUEST },
      {
        type: types.FOLLOW_SUCCESS,
        followed: 'Sparrow'
      }
    ];
    const store = mockStore();
    store
      .dispatch(actions.followUser('Sparrow'))
      .then(() => expect(store.getActions()).toEqual(expected));
  });

  it('dispatches FOLLOW_FAILURE in case of an error', () => {
    fetchMock.postOnce(`${API_HOST_URL}/profiles/Sparrow/follows/`, {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const expected = [
      { type: types.FOLLOW_REQUEST },
      {
        type: types.FOLLOW_FAILURE,
        error: 'Cannot follow.',
        message: 'Failed to follow Sparrow.'
      }
    ];
    const store = mockStore();
    store
      .dispatch(actions.followUser('Sparrow'))
      .then(() => expect(store.getActions()).toEqual(expected));
  });
});

describe('unfollowUser() action', () => {
  afterEach(() => fetchMock.restore());

  it('dispatches UNFOLLOW_SUCCESS after deleting a follow', () => {
    fetchMock.deleteOnce(`${API_HOST_URL}/profiles/Sparrow/follows/`, {
      status: 204,
      body: { message: 'Successfully unfollowed.' },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const expected = [
      { type: types.UNFOLLOW_REQUEST },
      {
        type: types.UNFOLLOW_SUCCESS,
        unfollowed: 'Sparrow'
      }
    ];
    const store = mockStore();
    store
      .dispatch(actions.unfollowUser('Sparrow'))
      .then(() => expect(store.getActions()).toEqual(expected));
  });

  it('dispatches UNFOLLOW_FAILURE incase of an error', () => {
    fetchMock.deleteOnce(`${API_HOST_URL}/profiles/Sparrow/follows/`, {
      status: 400,
      body: { error: 'Could not unfollow.' },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const expected = [
      { type: types.UNFOLLOW_REQUEST },
      {
        type: types.UNFOLLOW_FAILURE,
        error: 'Cannot unfollow.',
        message: 'Failed to unfollow Sparrow.'
      }
    ];
    const store = mockStore();
    store
      .dispatch(actions.unfollowUser('Sparrow'))
      .then(() => expect(store.getActions()).toEqual(expected));
  });
});

describe('getFollowsForCurrentUser() action', () => {
  afterEach(() => fetchMock.restore());

  it('dispatches GET_FOLLOWS_SUCCESS after a successful fetch', () => {
    fetchMock.getOnce(`${API_HOST_URL}/profiles/isaac/follows/`, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: { following: ['Spencer', 'Jack'] }
    });
    const expected = [
      { type: types.GET_FOLLOWS_REQUEST },
      {
        type: types.GET_FOLLOWS_SUCCESS,
        user: 'current',
        follows: ['Spencer', 'Jack']
      }
    ];
    const store = mockStore();
    store
      .dispatch(actions.getFollowsForCurrentUser('isaac'))
      .then(() => expect(store.getActions()).toEqual(expected));
  });

  it('dispatches GET_FOLLOWS_FAILURE when there is an error', () => {
    fetchMock.getOnce(`${API_HOST_URL}/profiles/isaac/follows/`, {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      },
      body: { error: 'Missing Authentication credentials.' }
    });
    const expected = [
      { type: types.GET_FOLLOWS_REQUEST },
      {
        type: types.GET_FOLLOWS_FAILURE,
        error: 'Cannot GET.',
        message: 'Cannot get followings for the current user.'
      }
    ];
    const store = mockStore();
    store
      .dispatch(actions.getFollowsForCurrentUser('isaac'))
      .then(() => expect(store.getActions()).toEqual(expected));
  });
});

describe('getFollowersForCurrentUser() action', () => {
  afterEach(() => fetchMock.restore());

  it('dispatches GET_FOLLOWERS_SUCCESS after a successful fetch', () => {
    fetchMock.getOnce(`${API_HOST_URL}/profiles/isaac/followers/`, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: { followers: ['Spencer', 'Jack'] }
    });
    const expected = [
      { type: types.GET_FOLLOWERS_REQUEST },
      {
        type: types.GET_FOLLOWERS_SUCCESS,
        user: 'current',
        followers: ['Spencer', 'Jack']
      }
    ];
    const store = mockStore();
    store
      .dispatch(actions.getFollowersForCurrentUser('isaac'))
      .then(() => expect(store.getActions()).toEqual(expected));
  });

  it('dispatches GET_FOLLOWERS_FAILURE incase of an error', () => {
    fetchMock.getOnce(`${API_HOST_URL}/profiles/isaac/followers/`, {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      },
      body: { error: 'Missing Authentication credentials.' }
    });
    const expected = [
      { type: types.GET_FOLLOWERS_REQUEST },
      {
        type: types.GET_FOLLOWERS_FAILURE,
        error: 'Cannot GET.',
        message: 'Cannot get followers for the current user.'
      }
    ];
    const store = mockStore();
    store
      .dispatch(actions.getFollowersForCurrentUser('isaac'))
      .then(() => expect(store.getActions()).toEqual(expected));
  });
});

describe('getFollowsForAnyUser() action', () => {
  afterEach(() => fetchMock.restore());

  it('dispatches GET_FOLLOWS_SUCCESS after a successful fetch', () => {
    fetchMock.getOnce(`${API_HOST_URL}/profiles/Sparrow/follows/`, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: { following: ['Tchalla', 'Thor'] }
    });
    const expected = [
      { type: types.GET_FOLLOWS_REQUEST },
      {
        type: types.GET_FOLLOWS_SUCCESS,
        user: 'Sparrow',
        follows: ['Tchalla', 'Thor']
      }
    ];
    const store = mockStore();
    store
      .dispatch(actions.getFollowsForAnyUser('Sparrow'))
      .then(() => expect(store.getActions()).toEqual(expected));
  });

  it('dispatches GET_FOLLOWS_FAILURE incase of an error', () => {
    fetchMock.getOnce(`${API_HOST_URL}/profiles/Sparrow/follows/`, {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      },
      body: { error: 'Missing Authentication credentials.' }
    });
    const expected = [
      { type: types.GET_FOLLOWS_REQUEST },
      {
        type: types.GET_FOLLOWS_FAILURE,
        error: 'Cannot GET.',
        message: 'Cannot get followings for Sparrow.'
      }
    ];
    const store = mockStore();
    store
      .dispatch(actions.getFollowsForAnyUser('Sparrow'))
      .then(() => expect(store.getActions()).toEqual(expected));
  });
});

describe('getFollowersForAnyUser() action', () => {
  afterEach(() => fetchMock.restore());

  it('dispatches GET_FOLLOWERS_SUCCESS after a successful fetch', () => {
    fetchMock.getOnce(`${API_HOST_URL}/profiles/Sparrow/followers/`, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: { followers: ['Okoye', 'Winter Soldier'] }
    });
    const expected = [
      { type: types.GET_FOLLOWERS_REQUEST },
      {
        type: types.GET_FOLLOWERS_SUCCESS,
        user: 'Sparrow',
        followers: ['Okoye', 'Winter Soldier']
      }
    ];
    const store = mockStore();
    store
      .dispatch(actions.getFollowersForAnyUser('Sparrow'))
      .then(() => expect(store.getActions()).toEqual(expected));
  });

  it('dispatches GET_FOLLOWERS_FAILURE if there is an error', () => {
    fetchMock.getOnce(`${API_HOST_URL}/profiles/Sparrow/followers/`, {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      },
      body: { error: 'Missing Authentication credentials.' }
    });
    const expected = [
      { type: types.GET_FOLLOWERS_REQUEST },
      {
        type: types.GET_FOLLOWERS_FAILURE,
        error: 'Cannot GET.',
        message: 'Cannot get followers for Sparrow.'
      }
    ];
    const store = mockStore();
    store
      .dispatch(actions.getFollowersForAnyUser('Sparrow'))
      .then(() => expect(store.getActions()).toEqual(expected));
  });
});
