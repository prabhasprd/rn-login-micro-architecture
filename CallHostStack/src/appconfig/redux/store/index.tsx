import {createStore, Store} from 'redux';
import persistedReducer from '../reducer/index';

const store: Store = createStore(persistedReducer);

export default store;
