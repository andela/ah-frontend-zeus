import articlesReducer from '../../reducers/ArticlesReducer';
import {
  ADD_ARTICLE_SUCCESS,
  GET_ARTICLES,
  GET_SINGLE_ARTICLE,
  EDIT_ARTICLE,
  DELETE_ARTICLE
} from '../../constants/ActionTypes';
import expect from 'expect';

describe('articles reducer', () => {
  it('should return the initial state', () => {
    expect(
      articlesReducer(undefined, {
        article: {},
        articles: [],
        delete: {},
        errors: {},
        likeResults: {
          "message": ""
        },
        update: {}
      })
    ).toEqual({
      article: {},
      articles: [],
      delete: {},
      errors: {},
      likeResults: {
        "message": ""
      },
      update: {}
    });
  });

  it('should handle ADD_ARTICLE', () => {
    const createOne = {
      type: ADD_ARTICLE_SUCCESS
    };
    expect(articlesReducer({}, createOne)).toEqual({});
  });

  it('should handle GET_ARTICLES', () => {
    const getAll = {
      type: GET_ARTICLES,
      payload: { results: [], next: '', previous: '' }
    };
    expect(articlesReducer({}, getAll)).toEqual({
      nextPage: '',
      previousPage: '',
      articles: []
    });
  });

  it('should handle EDIT_ARTICLE', () => {
    const upDate = {
      type: EDIT_ARTICLE
    };
    expect(articlesReducer({}, upDate)).toEqual({});
  });

  it('should handle DELETE_ARTICLE', () => {
    const successAction = {
      type: DELETE_ARTICLE
    };
    expect(articlesReducer({}, successAction)).toEqual({});
  });

  it('should handle GET_SINGLE_ARTICLE', () => {
    const getOne = {
      type: GET_SINGLE_ARTICLE
    };
    expect(articlesReducer({}, getOne)).toEqual({});
  });
});
