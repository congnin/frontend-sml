import { AUTH_SUCCESS, AUTH_LOGOUT, UPDATE_ME_SUCCESS } from './actionTypes';
import { updateObject } from '../utils';
import { ADMIN } from 'constants/images';

const initialState = {
  token: '',
  info: null,
  loggedIn: false,
  isAdmin: false,
};

const authSuccess = (state, action) => {
  const isAdmin = action.payload.data.user.role === ADMIN;
  return updateObject(state, {
    token: action.payload.token,
    info: action.payload.data.user,
    loggedIn: true,
    isAdmin: isAdmin,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: '',
    info: null,
    loggedIn: false,
    isAdmin: false,
  });
};

const updateMeSuccess = (state, action) => {
  return updateObject(state, {
    info: action.payload,
  });
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return authSuccess(state, action);
    case AUTH_LOGOUT:
      return authLogout(state, action);
    case UPDATE_ME_SUCCESS:
      return updateMeSuccess(state, action);
    default:
      return state;
  }
}
