import {
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_FAILURE,
  } from '../actions/photoActions';

  const initialState = {
    photos: [],
    loading: false,
    error: null,
    total: 200,
  };

  const photoReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PHOTOS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_PHOTOS_SUCCESS:
        return { ...state, loading: false, photos: [...state.photos, ...action.payload], error: null };
      case FETCH_PHOTOS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export default photoReducer;
