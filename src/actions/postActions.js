import * as api from "../dal/Articles";
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';


export const fetchPosts = (page, limit = 3) => {
  return async dispatch => {
    dispatch({ type: FETCH_POSTS_REQUEST });
    try {
      const posts = await api.getArticles(page, limit);
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: posts
      });
    } catch (error) {
      dispatch({
        type: FETCH_POSTS_FAILURE,
        payload: error.message
      });
    }

  };
};
