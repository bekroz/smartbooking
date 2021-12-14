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
    case AUTH.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        user: action.data,
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        userToken: action.data,
        userLoggedIn: true,
      };
    case AUTH.LOGIN_FAILURE:
      return { ...state, error: action.error };
    case AUTH.LOGOUT_REQUEST:
      return { ...state, userLoggedIn: true, loading: true };
    case AUTH.LOGOUT_SUCCESS:
      return { ...state };
    case AUTH.LOGOUT_FAILURE:
      return { ...state, action: action.error };
    default:
      return { ...state };
  }
};
export default authReducer;
