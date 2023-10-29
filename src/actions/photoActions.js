import * as api from "../dal/photos";
export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';


export const fetchPhotos = (photo, limit = 3) => {
  return async dispatch => {
    dispatch({ type: FETCH_PHOTOS_REQUEST });
    try {
      const photos = await api.getPhotos(photo, limit);
      dispatch({
        type: FETCH_PHOTOS_SUCCESS,
        payload: photos
      });
    } catch (error) {
      dispatch({
        type: FETCH_PHOTOS_FAILURE,
        payload: error.message
      });
    }

  };
};
