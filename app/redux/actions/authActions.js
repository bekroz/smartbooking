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
const loginRequestAction = () => ({
  type: AUTH.LOGIN_REQUEST,
});

const loginSuccessAction = ({ user, userToken }) => ({
  type: AUTH.LOGIN_SUCCESS,
  payload: {
    user,
    userToken,
  },
});

const loginFailureAction = error => ({
  type: AUTH.LOGIN_FAILURE,
  payload: error,
});

const logOutRequestAction = () => ({
  type: AUTH.LOGOUT_REQUEST,
});

const logOutSuccessAction = () => ({
  type: AUTH.LOGOUT_SUCCESS,
});

const logOutFailureAction = error => ({
  type: AUTH.LOGOUT_FAILURE,
  payload: error,
});

export {
  appTokenRequestAction,
  appTokenSuccessAction,
  appTokenFailureAction,
  loginRequestAction,
  loginSuccessAction,
  loginFailureAction,
  logOutRequestAction,
  logOutSuccessAction,
  logOutFailureAction,
};
