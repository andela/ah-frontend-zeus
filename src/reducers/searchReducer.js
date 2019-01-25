import { GET_SEARCH_DATA } from "../actions/Types";

 const initialState = {
  items: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
  case 'GET_SEARCH_DATA':
    return {
      ...state,
      items: action.payload
    };
  default:
    return state;
  }
}