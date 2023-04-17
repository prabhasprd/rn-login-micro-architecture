import {STORE_DETAILS} from './constant';
import {MINOR_STORE_DETAILS} from './constant';

export const updateUserDatails = (data: any) => {
  return {type: STORE_DETAILS, payload: data};
};

export const minorUpdateUserDatails = (data: any) => {
  return {type: MINOR_STORE_DETAILS, payload: data};
};
