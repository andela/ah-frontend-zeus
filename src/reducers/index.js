import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import testReducer from './TestReducer';
import errorReducer from './errorReducer';
import articleReducer from './ArticlesReducer';
import userprofile from './userprofile';
import searchReducer from './searchReducer';
import getBookmarkedArticlesReducer from './GetBookMarkedArticleReducer';
import postReducer from './PostReducer';
import {
  isRequesting,
  networkError,
  fetchError,
  currentUser,
  userWhoseFollowsInfoIsDisplayed,
  authors
} from './FollowsReducers';

const rootReducer = combineReducers({
  auth: authReducer,
  users: testReducer,
  errors: errorReducer,
  articles: articleReducer,
  isRequesting,
  networkError,
  fetchError,
  currentUser,
  userWhoseFollowsInfoIsDisplayed,
  authors,
  userprofile: userprofile,
  search: searchReducer,
  posts: postReducer,
  getBookmarkedArticlesReducer:getBookmarkedArticlesReducer
});

export default rootReducer;
