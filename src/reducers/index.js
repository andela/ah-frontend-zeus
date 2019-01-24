import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TestReducer from './TestReducer';
import ErrorReducer from './ErrorReducer';
const rootReducer = combineReducers({
  auth: AuthReducer,
  users: TestReducer,
  errors: ErrorReducer
});

export default rootReducer;
