import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import testReducer from './TestReducer';
import ErrorReducer from './ErrorReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  users: testReducer,
  errors: errorReducer
});

export default rootReducer;
