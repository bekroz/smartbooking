import * as typesAction from './types/typesAction';

const init = {
  allStation: [],
  onLogin: false,
  myInformation: {},
  errorLogin: '',
  errorRegister: '',
  loading: false,
};

const AuthenticationReducers = (state = init, action) => {
  switch (action.type) {
    case typesAction.GET_ALL_STATION_SUCCESS:
      return {...state, allStation: action.data};
    case typesAction.LOGIN:
      return {...state, loading: true};
    case typesAction.LOGIN_SUCCESS:
      return {...state, onLogin: true, loading: false};
    case typesAction.LOGIN_FAILED:
      return {...state, onLogin: false, errorLogin: action.error, loading: false};
    case typesAction.LOGOUT_SUCCESS:
      return {...state, onLogin: false};
    case typesAction.REGISTER:
      return {...state, loading: true};
    case typesAction.REGISTER_SUCCESS:
      return {...state};
    case typesAction.REGISTER_FAILED:
      return {...state, errorRegister: action.error, loading: false};
    case typesAction.GET_MY_ACCOUNT_SUCCESS:
      return {...state, myInformation: action.data};
    case typesAction.UPDATE_MY_ACCOUNT_SUCCESS:
      return {...state, myInformation: action.data};
    default:
      return {...state};
  }
};
export default AuthenticationReducers;
