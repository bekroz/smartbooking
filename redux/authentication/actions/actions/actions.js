import * as typesAction from '../types/typesAction';

export const login = (userData, tokenDevice) => {
  return {
    type: typesAction.LOGIN,
    tokenDevice,
    userData,
  };
};

export const loginSuccess = () => {
  return {
    type: typesAction.LOGIN_SUCCESS,
  };
};

export const loginFailed = error => {
  return {
    type: typesAction.LOGIN_FAILED,
    error,
  };
};

//GET ALL STATION
export const getAllStation = () => {
  return {
    type: typesAction.GET_ALL_STATION,
  };
};

export const getAllStationSuccess = data => {
  return {
    type: typesAction.GET_ALL_STATION_SUCCESS,
    data,
  };
};

export const getAllStationFailed = () => {
  return {
    type: typesAction.GET_ALL_STATION_FAILED,
  };
};

//LOGOUT
export const logOut = () => {
  return {
    type: typesAction.LOGOUT,
  };
};

export const logOutSuccess = () => {
  return {
    type: typesAction.LOGOUT_SUCCESS,
  };
};

export const logOutFailed = () => {
  return {
    type: typesAction.LOGOUT_FAILED,
  };
};

//register
export const register = (data, componentId) => {
  return {
    type: typesAction.REGISTER,
    data,
    componentId,
  };
};

export const registerSuccess = () => {
  return {
    type: typesAction.REGISTER_SUCCESS,
  };
};

export const registerFailed = error => {
  return {
    type: typesAction.REGISTER_FAILED,
    error,
  };
};

//GET GET MY ACCOUNT
export const getMyAccount = () => {
  return {
    type: typesAction.GET_MY_ACCOUNT,
  };
};
export const getMyAccountSuccess = data => {
  return {
    type: typesAction.GET_MY_ACCOUNT_SUCCESS,
    data,
  };
};

export const getMyAccountFailed = error => {
  return {
    type: typesAction.GET_MY_ACCOUNT_FAILED,
    error,
  };
};

//UPDATE MY ACCOUNT
export const updateMyAccount = (data) => {
  return {
    type: typesAction.UPDATE_MY_ACCOUNT,
    data,
  };
};
export const updateMyAccountSuccess = data => {
  return {
    type: typesAction.UPDATE_MY_ACCOUNT_SUCCESS,
    data,
  };
};

export const updateMyAccountFailed = error => {
  return {
    type: typesAction.UPDATE_MY_ACCOUNT_FAILED,
    error,
  };
};