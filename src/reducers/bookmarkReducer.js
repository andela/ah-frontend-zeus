import { BOOK_MARK_ARTICLE } from '../constants/ActionTypes';

const initialState = {
  bookmarked_article: {},
  loading: false
};

export default function(state = initialState, action){
  switch (action.type) {
    case BOOK_MARK_ARTICLE:
      return {
        ...state,
        bookmarked_article: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
