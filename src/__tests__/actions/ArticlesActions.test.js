import Enzyme from 'enzyme';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  getArticles,
  getSingleArticle,
  addArticle,
  editArticle,
  deleteArticle,
  reportArticle,
  dislikeArticle,
  likeArticle
} from '../../actions/ArticlesActions';
import {
  GET_ARTICLES,
  ADD_ARTICLE_SUCCESS,
  GET_SINGLE_ARTICLE,
  REPORT_ARTICLE_ERRORS,
  REPORT_ARTICLE
} from '../../constants/ActionTypes';

Enzyme.configure({ adapter: new EnzymeAdapter() });
// const fetch = require('fetch-mock');
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const API_HOST_URL = process.env.API_URL;

/* test for getting all articles*/
it.only('test getArticles action', () => {
  const url = `${API_HOST_URL}/articles/`;
  fetchMock.getOnce(url, {
    article: {
      results: [{}]
    },
    headers: { 'content-type': 'application/json' }
  });
  const expectedActions = [
    {
      payload: { results: [{}] },
      type: 'GET_ARTICLES'
    }
  ];
  const store = mockStore();

  return store
    .dispatch(getArticles())
    .then(() => expect(store.getActions()).toEqual(expectedActions));
});

/* test for fetching a single article*/
it.only('test getSingleArticles action', () => {
  const slug = 'a-thousand-men-3949l8rthr';
  const url = `${API_HOST_URL}/articles/a-thousand-men-3949l8rthr`;

  fetchMock.getOnce(url, {
    article: {},
    headers: { 'content-type': 'application/json' }
  });
  const expectedActions = [
    {
      payload: {},
      type: 'GET_SINGLE_ARTICLE'
    }
  ];
  const store = mockStore();

  return store
    .dispatch(getSingleArticle('a-thousand-men-3949l8rthr'))
    .then(() => expect(store.getActions()).toEqual(expectedActions));
});

/* test for posting an article*/
it.only('test addArticle action', () => {
  const url = `${API_HOST_URL}/articles/`;
  fetchMock.postOnce(url, {
    article: {
      title: 'title',
      description: 'description',
      body: 'body'
    },
    headers: { 'content-type': 'application/json' }
  });
  const expectedActions = [
    {
      payload: {
        article: {
          body: 'body',
          description: 'description',
          title: 'title'
        },
        headers: {
          'content-type': 'application/json'
        }
      },
      type: 'ADD_ARTICLE_SUCCESS'
    }
  ];
  const store = mockStore();

  return store
    .dispatch(addArticle())
    .then(() => expect(store.getActions()).toEqual(expectedActions));
});

/* test for editing an article*/
it.only('test editArticle action', () => {
  const slug = 'a-thousand-men-3949l8rthr';
  const url = `${API_HOST_URL}/articles/a-thousand-men-3949l8rthr`;

  fetchMock.putOnce(url, {
    article: {
      title: 'title',
      description: 'description',
      body: 'body'
    },
    headers: { 'content-type': 'application/json' }
  });
  const expectedActions = [
    {
      payload: {
        article: {
          body: 'body',
          description: 'description',
          title: 'title'
        },
        headers: {
          'content-type': 'application/json'
        }
      },
      type: 'EDIT_ARTICLE'
    }
  ];
  const store = mockStore();

  return store
    .dispatch(editArticle('a-thousand-men-3949l8rthr'))
    .then(() => expect(store.getActions()).toEqual(expectedActions));
});

/* test for deleting a single article*/
it.only('test deleteArticle action', () => {
  const slug = 'a-thousand-men-3949l8rthr';
  const url = `${API_HOST_URL}/articles/a-thousand-men-3949l8rthr`;

  fetchMock.deleteOnce(url, {
    article: {},
    headers: { 'content-type': 'application/json' }
  });
  const expectedActions = [
    {
      payload: {
        article: {},
        headers: {
          'content-type': 'application/json'
        }
      },
      type: 'DELETE_ARTICLE'
    }
  ];
  const store = mockStore();

  return store
    .dispatch(deleteArticle('a-thousand-men-3949l8rthr'))
    .then(() => expect(store.getActions()).toEqual(expectedActions));
});

/* test for reporting a single article*/
it.only('dispatches error messages', () => {
  const slug = 'qwertyuiop';
  fetchMock.postOnce(`${API_HOST_URL}/${slug}/report_article`, {
    'Content-Type': 'application/json',
    body: { message: 'Could not report article' }
  });
  const store = mockStore();
  const expectedActions = [
    {
      type: REPORT_ARTICLE_ERRORS,
      payload: { message: 'Could not report article' }
    }
  ];
  const payload = { reason: 'Contains plagiarised material' };
  store
    .dispatch(reportArticle(slug, payload))
    .then(() => expect(store.getActions()).toEqual(expectedActions));
});

/* test for reporting a single article*/
it.only('reports an article', () => {
  const slug = 'qwertyuiop';
  fetchMock.restore();
  fetchMock.postOnce(`${API_HOST_URL}/${slug}/report_article`, {
    'Content-Type': 'application/json',
    body: { report: 'successfully reported' }
  });
  const store = mockStore();
  const expectedActions = [
    {
      type: REPORT_ARTICLE,
      payload: { report: 'successfully reported' }
    }
  ];
  const payload = { reason: 'Contains plagiarised material' };
  store
    .dispatch(reportArticle(slug, payload))
    .then(() => expect(store.getActions()).toEqual(expectedActions));
});

/* test for disliking an article*/
it.only('test disliking an article', () => {
  const slug = 'qwertyuiop';
  fetchMock.restore();
  fetchMock.postOnce(`${API_HOST_URL}/articles/dislike/${slug}`, {
    'Content-Type': 'application/json',
    body: { message: 'dislike' }
  });
  const store = mockStore();
  const expectedActions = [
    {
      type: REPORT_ARTICLE_ERRORS,
      payload: { message: 'dislike' }
    }
  ];
  const payload = { message: 'dislike' };
  store
    .dispatch(dislikeArticle(slug, payload))
    .then(() => expect(store.getActions()).toEqual(expectedActions));
});

/* test for disliking an article*/
it.only('test liking an article', () => {
  const slug = 'qwertyuiop';
  fetchMock.restore();
  fetchMock.postOnce(`${API_HOST_URL}/articles/like/${slug}`, {
    'Content-Type': 'application/json',
    body: { message: 'like' }
  });
  const store = mockStore();
  const expectedActions = [
    {
      type: REPORT_ARTICLE_ERRORS,
      payload: { message: 'like' }
    }
  ];
  const payload = { message: 'like' };
  store
    .dispatch(likeArticle(slug, payload))
    .then(() => expect(store.getActions()).toEqual(expectedActions));
});