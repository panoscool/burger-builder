import * as types from './actionTypes';

export const authStart = () => {
  return {
    type: types.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: types.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const authFail = (error) => {
  return {
    type: types.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  return {
    type: types.AUTH_INITIATE_LOGOUT
  };
};

export const logoutSucceed = () => {
  return {
    type: types.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return {
    type: types.AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime
  };
};

export const authCheckState = () => {
  return {
    type: types.AUTH_CHECK_STATE
  };
};

export const auth = (email, password, isSignup) => {
  return {
    type: types.AUTH_USER,
    email: email,
    password: password,
    isSignup: isSignup
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: types.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};
