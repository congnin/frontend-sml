import userApi from 'api/userApi';
import tourApi from '../api/tourApi';
import * as localStorageData from './localStorageData';
import {
  FETCH_TOURS_INIT,
  FETCH_TOURS_SUCCESS,
  FETCH_TOURS_FAILED,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  AUTH_INIT,
  FETCH_TOUR_INIT,
  FETCH_TOUR_SUCCESS,
  FETCH_TOUR_FAILED,
} from './actionTypes';

export const authInit = () => {
  return {
    type: AUTH_INIT,
  };
};

export const authSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
};

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    payload: error,
  };
};

export const logout = () => {
  localStorageData.removeState();
  return {
    type: AUTH_LOGOUT,
  };
};

export const fetchTourInit = () => {
  return {
    type: FETCH_TOUR_INIT,
  };
};

export const fetchTourSuccess = (data) => {
  return {
    type: FETCH_TOUR_SUCCESS,
    payload: data,
  };
};

export const fetchTourFail = (error) => {
  return {
    type: FETCH_TOUR_FAILED,
    payload: error,
  };
};

export const fetchTour = (id) => async (dispatch) => {
  dispatch(fetchTourInit());
  try {
    const response = await tourApi.get(id);
    console.log(response);
    dispatch(fetchTourSuccess(response.data.data));
  } catch (e) {
    dispatch(fetchTourFail(e.message));
  }
};

export const fetchTours = () => async (dispatch) => {
  dispatch({ type: FETCH_TOURS_INIT });
  try {
    const response = await tourApi.getAll();
    dispatch({ type: FETCH_TOURS_SUCCESS, payload: response.data.data });
  } catch (e) {
    dispatch({ type: FETCH_TOURS_FAILED, payload: e.message });
  }
};

export const auth = (email, password, callback) => async (dispatch) => {
  dispatch(authInit());
  try {
    const authData = {
      email: email,
      password: password,
    };
    const response = await userApi.signIn(authData);
    if (response.status === 'success') {
      localStorageData.saveState(response);
      dispatch(authSuccess(response));
      callback();
    } else {
      dispatch(authFail(response.message));
    }
  } catch (e) {
    dispatch(authFail('Something went wrong'));
  }
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorageData.getToken();
    if (!token) {
      dispatch(logout());
    } else {
      const localState = localStorageData.loadState();
      dispatch(authSuccess(localState));
    }
  };
};
