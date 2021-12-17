import AUTH from '../types/authTypes';

const initialState = {
  loading: false,
  user: null,
  appToken: null,
  userToken: null,
  error: null,
  userLoggedIn: false,
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
        loading: true,
        appToken: action.payload,
      };
    case AUTH.APP_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AUTH.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
        userToken: action.userToken,
        userLoggedIn: true,
      };
    case AUTH.LOGIN_FAILURE:
      return { ...state, error: action.payload };
    case AUTH.LOGOUT_REQUEST:
      return { ...state, userLoggedIn: true, loading: true };
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
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};
export default authReducer;
