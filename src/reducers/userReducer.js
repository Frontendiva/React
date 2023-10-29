import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST
  } from '../actions/userActions';

  const initialState = {
    users: [],
    loading: false,
    error: null,
    total: 200,
  };

  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_USER_SUCCESS:
        return { ...state, loading: false, users: action.payload, error: null };
      case FETCH_USER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export default userReducer;
