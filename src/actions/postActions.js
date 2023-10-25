export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPosts = () => {
  return dispatch => {
    dispatch({ type: FETCH_POSTS_REQUEST });

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: posts
      }))
      .catch(error => dispatch({
        type: FETCH_POSTS_FAILURE,
        payload: error.message
      }));
  };
};