import { GET_SEARCH_DATA } from './Types';

const API_HOST_URL = process.env.API_URL;
export const getSearchData = (type, fetchData) => dispatch =>
  fetch(
    `${API_HOST_URL}/articles/search/?${type}=${fetchData}`,

    {
      headers: {
        'Content-type': 'application/json'
      }
    }
  )
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: GET_SEARCH_DATA,
        payload: data['search results']
      });
    });
export default getSearchData;
