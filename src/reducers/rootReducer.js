import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';
import photoReducer from './photoReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
  photos: photoReducer,
  // Другие редукторы, если они есть
});

export default rootReducer;
