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
  UPDATE_ME_INIT,
  UPDATE_ME_SUCCESS,
  UPDATE_ME_FAIL,
  UPDATE_MY_PASS_INIT,
  UPDATE_MY_PASS_SUCCESS,
  UPDATE_MY_PASS_FAIL,
  FETCH_USERS_INIT,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
} from './actionTypes';

function getErrorMessage(err) {
  let errMsg;
  if (err.response && err.response.data && err.response.data.message) {
    errMsg = err.response.data.message;
  } else {
    errMsg = 'Something went wrong';
  }
  return errMsg;
}

export const updateMyPassInit = () => {
  return {
    type: UPDATE_MY_PASS_INIT,
  };
};

export const updateMyPassSuccess = (data) => {
  return {
    type: UPDATE_MY_PASS_SUCCESS,
    payload: data,
  };
};

export const updateMyPassFail = (error) => {
  return {
    type: UPDATE_MY_PASS_FAIL,
    payload: error,
  };
};

export const updateMeInit = () => {
  return {
    type: UPDATE_ME_INIT,
  };
};

export const updateMeSuccess = (data) => {
  return {
    type: UPDATE_ME_SUCCESS,
    payload: data,
  };
};

export const updateMeFail = (error) => {
  return {
    type: UPDATE_ME_FAIL,
    payload: error,
  };
};

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

export const fetchToursInit = () => {
  return {
    type: FETCH_TOURS_INIT,
  };
};

export const fetchToursSuccess = (data) => {
  return {
    type: FETCH_TOURS_SUCCESS,
    payload: data,
  };
};

export const fetchToursFail = (error) => {
  return {
    type: FETCH_TOURS_FAILED,
    payload: error,
  };
};

export const fetchUsersInit = () => {
  return {
    type: FETCH_USERS_INIT,
  };
};

export const fetchUsersSuccess = (data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data,
  };
};

export const fetchUsersFail = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

export const fetchTour = (id) => async (dispatch) => {
  dispatch(fetchTourInit());
  try {
    const response = await tourApi.get(id);
    dispatch(fetchTourSuccess(response.data.data));
  } catch (e) {
    dispatch(fetchTourFail(getErrorMessage(e)));
  }
};

export const fetchTours = () => async (dispatch) => {
  dispatch(fetchToursInit());
  try {
    const response = await tourApi.getAll();
    dispatch(fetchToursSuccess(response.data.data));
  } catch (e) {
    dispatch(fetchToursFail(getErrorMessage(e)));
  }
};

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersInit());
  try {
    const response = await userApi.getAll();
    dispatch(fetchUsersSuccess(response.data.data));
  } catch (e) {
    dispatch(fetchUsersFail(getErrorMessage(e)));
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
    localStorageData.saveState(response);
    dispatch(authSuccess(response));
    callback();
  } catch (e) {
    dispatch(authFail(getErrorMessage(e)));
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

export const updateMe = (name, email) => {
  return async (dispatch) => {
    dispatch(updateMeInit());
    const me = {
      name: name,
      email: email,
    };
    try {
      const response = await userApi.updateMe(me);
      localStorageData.saveState(response);
      dispatch(updateMeSuccess(response.data.user));
    } catch (e) {
      dispatch(updateMeFail(getErrorMessage(e)));
    }
  };
};

export const updateMyPassword = (currentPass, newPass, confirmPass) => {
  return async (dispatch) => {
    dispatch(updateMyPassInit());
    const myPassword = {
      passwordCurrent: currentPass,
      password: newPass,
      passwordConfirm: confirmPass,
    };
    try {
      const response = await userApi.updateMyPassword(myPassword);
      dispatch(updateMyPassSuccess(response.data.user));
    } catch (e) {
      dispatch(updateMyPassFail(getErrorMessage(e)));
    }
  };
};
