import { AUTH } from '../types/index';

// APP token
const appTokenRequestAction = () => ({
  type: AUTH.APP_TOKEN_REQUEST,
});

const appTokenSuccessAction = appToken => ({
  type: AUTH.APP_TOKEN_SUCCESS,
  payload: appToken,
});

const appTokenFailureAction = error => ({
  type: AUTH.APP_TOKEN_FAILURE,
  payload: error,
});

// USER token
const loginRequestAction = user => ({
  type: AUTH.LOGIN_REQUEST,
  payload: user,
});

const loginSuccessAction = userToken => ({
  type: AUTH.LOGIN_SUCCESS,
  payload: userToken,
});

const loginFailureAction = error => ({
  type: AUTH.LOGIN_FAILURE,
  payload: error,
});

export {
  appTokenRequestAction,
  appTokenSuccessAction,
  appTokenFailureAction,
  loginRequestAction,
  loginSuccessAction,
  loginFailureAction,
};
