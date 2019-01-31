import {
    BOOK_MARKED_ARTICLES
  } from '../constants/ActionTypes';
  
  const initialState = {
    articlesBookmarked: [],
  };
  
  const getBookmarkedArticlesReducer = (state = initialState, action) => {
    switch (action.type) {
      case BOOK_MARKED_ARTICLES:
        return {
          ...state,
          articlesBookmarked: action.payload
        };
      default:
        return state;
    }
  };
  export default getBookmarkedArticlesReducer;