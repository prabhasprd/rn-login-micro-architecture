import {combineReducers} from 'redux';
import {minorUserReducer} from './mainReducer';

const rootReducer = combineReducers({
  minorUserReducer,
});

export default rootReducer;
