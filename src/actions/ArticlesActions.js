import {
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_ERRORS,
  REPORT_ARTICLE_ERRORS,
  GET_ARTICLES,
  GET_SINGLE_ARTICLE,
  EDIT_ARTICLE,
  DELETE_ARTICLE,
  LIKE_ARTICLE,
  DISLIKE_ARTICLE,
  REPORT_ARTICLE,
} from '../constants/ActionTypes';
import { toast } from 'react-toastify';

const token = window.localStorage.getItem('token');

const API_HOST_URL = process.env.API_URL;

export const getArticles = (url = undefined) => dispatch => {

  let path = url;
  if (!path) {
    path = `${API_HOST_URL}/articles/`;
  }
  return fetch(path, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(articles => {
      dispatch({
        type: GET_ARTICLES,
        payload: articles.article
      });
    });
};

export const getSingleArticle = slug => dispatch => {
  return fetch(`${API_HOST_URL}/articles/${slug}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(articles => {
      dispatch({
        type: GET_SINGLE_ARTICLE,
        payload: articles.article
      });
    });
};

export const addArticle = payload => dispatch => {
  return fetch(`${API_HOST_URL}/articles/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    },
    CORS: 'no-cors',
    body: JSON.stringify({ article: payload })
  })
    .then(res => res.json())
    .then(response => {
      if (response.article.errors) {
        dispatch({
          type: ADD_ARTICLE_ERRORS,
          payload: response
        });
      } else if (response.article.title) {
        dispatch({
          type: ADD_ARTICLE_SUCCESS,
          payload: response
        });
      }
    });
};

export const editArticle = (slug, payload) => dispatch => {
  return fetch(`${API_HOST_URL}/articles/${slug}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    },
    CORS: 'no-cors',
    body: JSON.stringify({ article: payload })
  })
    .then(res => res.json())
    .then(response => {
      if (response.article.errors) {
        dispatch({
          type: ADD_ARTICLE_ERRORS,
          payload: response
        });
      } else if (response.article.title) {
        dispatch({
          type: EDIT_ARTICLE,
          payload: response
        });
      }
    });
};

export const deleteArticle = slug => dispatch => {
  return fetch(`${API_HOST_URL}/articles/${slug}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    },
    CORS: 'no-cors',
    body: JSON.stringify({ article: slug })
  })
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: DELETE_ARTICLE,
        payload: response
      });
    });
};

export const likeArticle = (slug, payload) => dispatch => {
  return fetch(`${API_HOST_URL}/articles/like/${slug}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    },
    CORS: 'no-cors',
    body: JSON.stringify({ article: payload })
  })
    .then(res => res.json())
    .then(articles => {
      dispatch({
        type: LIKE_ARTICLE,
        payload: articles
      });
    });
};

export const dislikeArticle = (slug, payload) => dispatch => {
  return fetch(`${API_HOST_URL}/articles/dislike/${slug}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    },
    CORS: 'no-cors',
    body: JSON.stringify({ article: payload })
  })
    .then(res => res.json())
    .then(articles => {
      dispatch({
        type: DISLIKE_ARTICLE,
        payload: articles
      });
    });
  };

export const reportArticle = (slug, payload) => dispatch => {
  return fetch(`${API_HOST_URL}/${slug}/report_article`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    },
    CORS: 'no-cors',
    body: JSON.stringify({ reason: `${payload.reason}` })
  })
    .then(res => res.json())
    .then(response => {
      if (response.message) {
        toast.warning(response.message);
        dispatch({
          type: REPORT_ARTICLE_ERRORS,
          payload: response
        });
      } 
      else if (response) {
        toast.info("Your report has been sent");
        dispatch({
          type: REPORT_ARTICLE,
          payload: response
        });
      }
    });
};
