import {createStore, Store} from 'redux';
import persistedReducer from '../reducer/index';

const minorAppStore: Store = createStore(persistedReducer);

export default minorAppStore;
