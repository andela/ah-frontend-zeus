import {
  USER_PROFILE,
  EDIT_USER_PROFILE,
 
} from '../constants';

const initialState = {
  userprofile: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {

    case USER_PROFILE:
      return {
        ...state,
        userprofile: action.payload,
        loading: false
      };

    case EDIT_USER_PROFILE:
      return {
        ...state,
        userprofile: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
