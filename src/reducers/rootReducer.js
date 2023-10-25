import { combineReducers } from 'redux';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  // Другие редукторы, если они есть
});

export default rootReducer;