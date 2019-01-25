let TOKEN =localStorage.getItem('token');
export const bookmarkArticle = slug => dispatch => {
  return fetch(
    `https://zeus-staging.herokuapp.com/api/articles/bookmark/${slug}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${ TOKEN}`
      }
    }
  )
    .then(res => res.json())
};
