import {
  GET_ARTICLES,
  GET_SINGLE_ARTICLE,
  EDIT_ARTICLE,
  DELETE_ARTICLE,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_ERRORS,
  LIKE_ARTICLE,
  DISLIKE_ARTICLE
} from '../constants/ActionTypes';

const initialState = {
  articles: [],
  article: {},
  update: {},
  delete: {},
  errors: {},
  likeResults: {message:""}
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        success: action.payload
      };
    case ADD_ARTICLE_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload.results || [],
        nextPage: action.payload.next,
        previousPage: action.payload.previous
      };
    case GET_SINGLE_ARTICLE:
      return {
        ...state,
        article: action.payload
      };
    case EDIT_ARTICLE:
      return {
        ...state,
        update: action.payload
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        delete: action.payload
      };
    case LIKE_ARTICLE:
      return {
        ...state,
        likeResults: action.payload
      };
    case DISLIKE_ARTICLE:
    console.log();
    
      return {
        ...state,
        likeResults: action.payload
      };
    default:
      return state;
  }
};
export default articlesReducer;
