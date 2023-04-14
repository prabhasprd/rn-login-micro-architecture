import {INITIAL_STATE} from './initialState';
import {MINOR_STORE_DETAILS} from '../action/constant';

export const userReducerMinor = (
  state = INITIAL_STATE.minorUserDetails,
  action,
) => {
  switch (action.type) {
    case MINOR_STORE_DETAILS:
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
