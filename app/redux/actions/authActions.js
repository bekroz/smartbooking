// Type
import AUTH from '../types/authTypes';
import useApi from '../../api/useApi';
// #1 Registration

export default function authActions() {
  const appTokenizationAction = () => {
    return function (dispatch) {
      dispatch(userLoginPending());
      return handleAppTokenization
        .getPost(userParams, headers, loginUrl.LOGIN)
        .then(userResponse => {
          // console.log('User response,', userResponse);
          if (!userResponse.status && userResponse.message) {
            dispatch(userLoginError(userResponse.message));
          } else {
            // console.log('ACTION RESULTS IS =>>> ', appToken);
            dispatch(userLoginSuccess(appToken));
          }
        })
        .catch(error => {
          // console.log('alert', error);
          dispatch(userLoginError('something went wrong'));
        });
    };
  };
  const registerRequest = () => {
    return {
      type: AUTH.REGISTER_REQUEST,
    };
  };
  const registerSuccess = () => {
    return {
      type: AUTH.REGISTER_SUCCESS,
    };
  };

  const registerFailure = error => {
    return {
      type: AUTH.REGISTER_FAILURE,
      error,
    };
  };

  // #2 Login
  const loginRequest = appToken => {
    return {
      type: AUTH.LOGIN_REQUEST,
      appToken,
    };
  };

  const loginSuccess = () => {
    return {
      type: AUTH.LOGIN_SUCCESS,
    };
  };

  const loginFailure = error => {
    return {
      type: AUTH.LOGIN_FAILURE,
      error,
    };
  };

  // #3 Logout
  const logOutRequest = () => {
    return {
      type: AUTH.LOGOUT_REQUEST,
    };
  };

  const logOutSuccess = () => {
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
  const passwordResetRequest = () => {
    return {
      type: AUTH.PASSWORD_RESET_REQUEST,
    };
  };
  const passwordResetSuccess = () => {
    return {
      type: AUTH.PASSWORD_RESET_SUCCESS,
    };
  };

  const passwordResetFailure = error => {
    return {
      type: AUTH.PASSWORD_RESET_FAILURE,
      error,
    };
  };

  // #5 App Token
  const appTokenGet = () => {
    return {
      type: AUTH.APP_TOKEN_GET,
    };
  };

  const appTokenSave = () => {
    return {
      type: AUTH.APP_TOKEN_SAVE,
    };
  };

  const appTokenRefresh = () => {
    return {
      type: AUTH.APP_TOKEN_REFRESH,
    };
  };

  const appTokenRemove = error => {
    return {
      type: AUTH.APP_TOKEN_REMOVE,
      error,
    };
  };

  // #6 User Token
  const userTokenGet = () => {
    return {
      type: AUTH.USER_TOKEN_GET,
    };
  };

  const userTokenSave = () => {
    return {
      type: AUTH.USER_TOKEN_SAVE,
    };
  };

  const userTokenRefresh = () => {
    return {
      type: AUTH.USER_TOKEN_REFRESH,
    };
  };

  const userTokenRemove = error => {
    return {
      type: AUTH.USER_TOKEN_REMOVE,
      error,
    };
  };

  // #7 Account
  const accountDeleteRequest = () => {
    return {
      type: AUTH.ACCOUNT_DELETE_REQUEST,
    };
  };

  const accountDeleteSuccess = () => {
    return {
      type: AUTH.ACCOUNT_DELETE_SUCCESS,
    };
  };

  const accountDeleteFailure = error => {
    return {
      type: AUTH.ACCOUNT_DELETE_FAILURE,
      error,
    };
  };
}
