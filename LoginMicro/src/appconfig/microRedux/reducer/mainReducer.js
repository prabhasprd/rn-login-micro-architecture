import {INITIAL_STATE} from './initialState';
import {STORE_DETAILS} from '../action/constant';

export const minorUserReducer = (
  state = INITIAL_STATE.minorUserDetails,
  action,
) => {
  switch (action.type) {
    case STORE_DETAILS:
      return [
        {
          name: action.payload,
        },
      ];

    default:
      return state;
  }
};
