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
  deleteArticle
} from '../../actions/ArticlesActions';
import {
  GET_ARTICLES,
  ADD_ARTICLE_SUCCESS,
  GET_SINGLE_ARTICLE
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
      payload: [{}],
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
