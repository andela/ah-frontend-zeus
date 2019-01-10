import { combineReducers } from 'redux';
import testReducer from './TestReducer';

const rootReducer = combineReducers({
  // objects for reducers
  users: testReducer,
});

export default rootReducer;
