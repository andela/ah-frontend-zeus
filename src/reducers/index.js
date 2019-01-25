import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TestReducer from './TestReducer';
import ErrorReducer from './ErrorReducer';
import articleReducer from './ArticlesReducer';
import userprofile from './userprofile';
import searchReducer from './searchReducer';
import postReducer from './PostReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  users: TestReducer,
  errors: ErrorReducer,
  articles: articleReducer,
  userprofile: userprofile,
  search: searchReducer,
  posts: postReducer
});

export default rootReducer;
