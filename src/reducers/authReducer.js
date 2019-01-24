import { SET_CURRENT_USER } from '../constants/ActionTypes';

const initialState = {
  isAuthenticated: false,
  user: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
