// action types declared as constants to avoid duplicates and typos
export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_SINGLE_ARTICLE = 'GET_SINGLE_ARTICLE';
export const ADD_ARTICLE_SUCCESS = 'ADD_ARTICLE_SUCCESS';
export const ADD_ARTICLE_ERRORS = 'ADD_ARTICLE_ERRORS';
export const EDIT_ARTICLE = 'EDIT_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const BOOK_MARKED_ARTICLES ='BOOK_MARKED_ARTICLES';
export const GET_ERRORS = 'GET_ERRORS';
export const SUCCESS = 'SUCCESS';
export const WARNING = 'WARNING';
export const ERROR = 'WARNING';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const NEW_COMMENT = 'NEW_COMMENT';

// Action types for following and unfollowing users.
export const GET_PROFILES_REQUEST = 'GET_PROFILES_REQUEST';
export const GET_PROFILES_SUCCESS = 'GET_PROFILES_SUCCESS';
export const GET_PROFILES_FAILURE = 'GET_PROFILES_FAILURE';
export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
export const GET_FOLLOWS_REQUEST = 'GET_FOLLOWS_REQUEST';
export const GET_FOLLOWS_SUCCESS = 'GET_FOLLOWS_SUCCESS';
export const GET_FOLLOWS_FAILURE = 'GET_FOLLOWS_FAILURE';
export const GET_FOLLOWERS_REQUEST = 'GET_FOLLOWERS_REQUEST';
export const GET_FOLLOWERS_SUCCESS = 'GET_FOLLOWERS_SUCCESS';
export const GET_FOLLOWERS_FAILURE = 'GET_FOLLOWERS_FAILURE';

// Auth actions.
export const SIGNOUT = 'SIGNOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const Modules = {
  toolbar: {
    container: [
      [{ placeholder: ['[GuestName]', '[HotelName]'] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['link', 'image', 'video'],
      ['clean']
    ]
  }
};
export const LIKE_ARTICLE = 'LIKE';
export const DISLIKE_ARTICLE = 'DISLIKE';
export default Modules;
