import { fetchPosts, createPost } from '../../actions/PostActions';
import fetchMock from 'fetch-mock';
import Enzyme from 'enzyme';
import configureMockStore from 'redux-mock-store';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const API_HOST_URL = process.env.API_URL;

it('test get comments of action', () => {
  const slug = 'first-title-9bi4rthnqt';
  const url = `${API_HOST_URL}/${slug}/comments/`;

  fetchMock.getOnce(url, {
    comments: [],
    headers: { 'content-type': 'application/json' }
  });
  const expectedActions = [
    {
      payload: { headers: { 'content-type': 'application/json' }, comments: [] },
      type: 'FETCH_COMMENTS'
    }
  ];
  const store = mockStore();

  return store
    .dispatch(fetchPosts('first-title-9bi4rthnqt'))
    .then(() => expect(store.getActions()).toEqual(expectedActions));
});

it('test comment  action', () => {
  const slug = 'first-title-9bi4rthnqt';
  const url = `${API_HOST_URL}/${slug}/comments/`;

  fetchMock.postOnce(url, {
    comment: {
      comment_body: 'This is very bad article and wellk'
    },
    headers: { 'content-type': 'application/json' }
  });
  const expectedActions = [
    {
      payload: {
        comment: { comment_body: 'This is very bad article and wellk' },
        headers: { 'content-type': 'application/json' }
      },
      type: 'NEW_COMMENT'
    }
  ];
  const store = mockStore();

  return store
    .dispatch(createPost('first-title-9bi4rthnqt'))
    .then(() => expect(store.getActions()).toEqual(expectedActions));
});
