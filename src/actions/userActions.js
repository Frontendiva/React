import * as api from "../dal/users";
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';


export const fetchUsers = (user, limit = 3) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER_REQUEST });
    try {
      const users = await api.getUsers(user, limit = 3);
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: users
      });
    } catch (error) {
      dispatch({
        type: FETCH_USER_FAILURE,
        payload: error.message
      });
    }

  };
};
