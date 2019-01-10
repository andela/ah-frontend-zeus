import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

// creates the redux store
const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
