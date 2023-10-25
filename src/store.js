import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Если вы хотите использовать асинхронные действия
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;