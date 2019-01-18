import { combineReducers } from 'redux';
import authReducer from './authReducer';
import testReducer from './TestReducer';
import errorReducer from './errorReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  users: testReducer,
  errors: errorReducer
});

export default rootReducer;