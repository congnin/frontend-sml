import {
  AUTH_INIT,
  AUTH_SUCCESS,
  AUTH_FAIL,
  FETCH_TOURS_INIT,
  FETCH_TOURS_SUCCESS,
  FETCH_TOURS_FAILED,
  FETCH_TOUR_INIT,
  FETCH_TOUR_SUCCESS,
  FETCH_TOUR_FAILED,
} from './actionTypes';

import { updateObject } from '../utils/index';

const initialState = {
  authLoading: false,
  authErrMsg: '',
  toursLoading: false,
  toursErrMsg: '',
  tourLoading: false,
  tourErrMsg: '',
};

export default function errors(state = initialState, action) {
  switch (action.type) {
    case AUTH_INIT:
      return updateObject(state, {
        authLoading: true,
        authErrMsg: '',
      });
    case AUTH_SUCCESS:
      return updateObject(state, {
        authLoading: false,
        authErrMsg: '',
      });

    case AUTH_FAIL:
      const error = action.payload || 'Not known';
      return updateObject(state, {
        authLoading: false,
        authErrMsg: error,
      });

    case FETCH_TOURS_INIT:
      return updateObject(state, {
        toursLoading: true,
        toursErrMsg: '',
      });
    case FETCH_TOURS_SUCCESS:
      return updateObject(state, {
        toursLoading: false,
        toursErrMsg: '',
      });
    case FETCH_TOURS_FAILED:
      return updateObject(state, {
        toursLoading: false,
        toursErrMsg: action.payload,
      });

    case FETCH_TOUR_INIT:
      return updateObject(state, {
        tourLoading: true,
        tourErrMsg: '',
      });
    case FETCH_TOUR_SUCCESS:
      return updateObject(state, {
        tourLoading: false,
        tourErrMsg: '',
      });
    case FETCH_TOUR_FAILED:
      return updateObject(state, {
        tourLoading: false,
        tourErrMsg: action.payload,
      });
    default:
      return state;
  }
}
