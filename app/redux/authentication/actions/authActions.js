// Type
import AUTH from '../types/authTypes';

// #1 Registration
export const registerRequest = () => {
  return {
    type: AUTH.REGISTER_REQUEST,
  };
};

export const registerSuccess = () => {
  return {
    type: AUTH.REGISTER_SUCCESS,
  };
};

export const registerFailure = error => {
  return {
    type: AUTH.REGISTER_FAILURE,
    error,
  };
};

// #2 Login
export const loginRequest = appToken => {
  return {
    type: AUTH.LOGIN_REQUEST,
    appToken,
  };
};

export const loginSuccess = () => {
  return {
    type: AUTH.LOGIN_SUCCESS,
  };
};

export const loginFailure = error => {
  return {
    type: AUTH.LOGIN_FAILURE,
    error,
  };
};

// #3 Logout
export const logOutRequest = () => {
  return {
    type: AUTH.LOGOUT_REQUEST,
  };
};

export const logOutSuccess = () => {
  return {
    type: AUTH.LOGOUT_SUCCESS,
  };
};

export const logOutFailure = () => {
  return {
    type: AUTH.LOGOUT_FAILURE,
  };
};

// #4 Password Reset
export const passwordResetRequest = () => {
  return {
    type: AUTH.PASSWORD_RESET_REQUEST,
  };
};

export const passwordResetSuccess = () => {
  return {
    type: AUTH.PASSWORD_RESET_SUCCESS,
  };
};

export const passwordResetFailure = error => {
  return {
    type: AUTH.PASSWORD_RESET_FAILURE,
    error,
  };
};

// #5 App Token
export const appTokenGet = () => {
  return {
    type: AUTH.APP_TOKEN_GET,
  };
};

export const appTokenSave = () => {
  return {
    type: AUTH.APP_TOKEN_SAVE,
  };
};

export const appTokenRefresh = () => {
  return {
    type: AUTH.APP_TOKEN_REFRESH,
  };
};

export const appTokenRemove = error => {
  return {
    type: AUTH.APP_TOKEN_REMOVE,
    error,
  };
};

// #6 User Token
export const userTokenGet = () => {
  return {
    type: AUTH.USER_TOKEN_GET,
  };
};

export const userTokenSave = () => {
  return {
    type: AUTH.USER_TOKEN_SAVE,
  };
};

export const userTokenRefresh = () => {
  return {
    type: AUTH.USER_TOKEN_REFRESH,
  };
};

export const userTokenRemove = error => {
  return {
    type: AUTH.USER_TOKEN_REMOVE,
    error,
  };
};

// #7 Account
export const accountDeleteRequest = () => {
  return {
    type: AUTH.ACCOUNT_DELETE_REQUEST,
  };
};

export const accountDeleteSuccess = () => {
  return {
    type: AUTH.ACCOUNT_DELETE_SUCCESS,
  };
};

export const accountDeleteFailure = error => {
  return {
    type: AUTH.ACCOUNT_DELETE_FAILURE,
    error,
  };
};
