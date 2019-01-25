import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TestReducer from './TestReducer';
import ErrorReducer from './ErrorReducer';
import articleReducer from './ArticlesReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  users: TestReducer,
  errors: ErrorReducer,
  articles: articleReducer
});

export default rootReducer;
