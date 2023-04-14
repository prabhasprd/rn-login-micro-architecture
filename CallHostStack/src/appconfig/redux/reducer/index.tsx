import {combineReducers} from 'redux';
import {userReducer} from './mainReducer';
import {userReducerMinor} from './mainReducerMinor';

const rootReducer = combineReducers({
  userReducer,
  userReducerMinor,
});

export default rootReducer;
