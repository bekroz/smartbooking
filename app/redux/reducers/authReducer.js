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
        user: action.payload,
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userLoggedIn: true,
        userToken: action.payload,
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
        userLoggedIn: true,
      };
    case AUTH.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        appToken: null,
        userToken: null,
        userLoggedIn: false,
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
