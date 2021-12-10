import AsyncStorage from '@react-native-async-storage/async-storage';

// #1
const getAppToken = async () => {
  const appToken = await AsyncStorage.getItem('APP_TOKEN');
  return appToken ? JSON.parse(appToken) : null;
};

// #2
const setAppToken = async appToken => {
  return AsyncStorage.setItem('APP_TOKEN', JSON.stringify(appToken));
};

// #3
const getUserToken = async () => {
  const userToken = await AsyncStorage.getItem('USER_TOKEN');
  return userToken ? JSON.parse(userToken) : null;
};

// #4
const setUserToken = async userToken => {
  return AsyncStorage.setItem('USER_TOKEN', JSON.stringify(userToken));
};

// #5
const clearStorage = async () => {
  return AsyncStorage.clear();
};

export {
  // #1
  getAppToken,
  // #2
  setAppToken,
  // #3
  getUserToken,
  // #4
  setUserToken,
  // #5
  clearStorage,
};
