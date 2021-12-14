import useApi from '../../utils/api/useApi';
import createDataContext from './authContext';

const authReducer = (state, action) => {
  const initialState = {
    userToken: null,
    user: null,
    error: null,
  };
  switch (action.type) {
    case 'LOGOUT':
      return { userToken: null, user: null };
    case 'LOGIN':
      return {
        userToken: action.payload.userToken,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

const LOGIN = async dispatch => {
  return (userToken, userSecret) => {
    console.log('LOGIN');
    dispatch({
      type: 'LOGIN',
      payload: {
        user: userSecret,
        userToken: userToken,
      },
    });
  };
};

const LOGOUT = dispatch => {
  return () => {
    dispatch({ type: 'LOGOUT' });
  };
};

export const { AuthProvider, AuthContext } = createDataContext(
  authReducer,
  { LOGIN, LOGOUT },
  { userToken: null, user: null },
);
