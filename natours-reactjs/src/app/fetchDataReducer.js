import {
  FETCH_TOURS_SUCCESS,
  FETCH_TOURS_FAILED,
  FETCH_TOUR_SUCCESS,
  FETCH_TOUR_FAILED,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
} from './actionTypes';

import { updateObject } from '../utils';

const initialState = {
  tours: [],
  page: 0,
  tour: null,
  users: [],
};

export default function tours(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOURS_SUCCESS:
      return updateObject(state, {
        tours: action.payload,
      });
    case FETCH_TOURS_FAILED:
      return updateObject(state, {
        tours: [],
      });
    case FETCH_TOUR_SUCCESS:
      return updateObject(state, {
        tour: action.payload,
      });
    case FETCH_TOUR_FAILED:
      return updateObject(state, {
        tour: null,
      });
    case FETCH_USERS_SUCCESS:
      return updateObject(state, {
        users: action.payload,
      });
    case FETCH_USERS_FAILED:
      return updateObject(state, {
        users: [],
      });
    default:
      return state;
  }
}
