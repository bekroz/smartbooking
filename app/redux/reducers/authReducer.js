import { AUTH } from '../types';

const initialState = {
  loading: true,
  user: null,
  appToken: null,
  userToken: null,
  userLoggedIn: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.APP_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH.APP_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        appToken: action.payload,
      };
    case AUTH.APP_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        userLoggedIn: false,
        error: action.payload,
      };
    case AUTH.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        userLoggedIn: false,
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userLoggedIn: true,
        user: action.payload.user,
        userToken: action.payload.userToken,
      };
    case AUTH.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        userLoggedIn: false,
        error: action.payload,
      };
    case AUTH.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH.LOGOUT_SUCCESS:
      return {
        initialState,
        loading: false,
      };
    case AUTH.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
