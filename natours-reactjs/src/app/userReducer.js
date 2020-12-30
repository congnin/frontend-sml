import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes';
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

export default function user(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return authSuccess(state, action);
    case AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
}
