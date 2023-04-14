import {INITIAL_STATE} from './initialState';
import {STORE_DETAILS} from '../action/constant';

export const userReducer = (state = INITIAL_STATE.userDetails, action) => {
  switch (action.type) {
    case STORE_DETAILS:
      return [
        {
          name: action.payload.name,
          phone: action.payload.phone,
        },
      ];

    default:
      return state;
  }
};
