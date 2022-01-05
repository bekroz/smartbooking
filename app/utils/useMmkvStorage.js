import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

// #1
const getAppTokenMMKV = () => {
  const appToken = storage.getString('APP_TOKEN');
  return appToken;
};

// #2
const setAppTokenMMKV = appToken => {
  storage.set('APP_TOKEN', appToken);
};

// #3
const getUserTokenMMKV = () => {
  const userToken = storage.getString('USER_TOKEN');
  return userToken;
};

// #4
const setUserTokenMMKV = userToken => {
  storage.set('USER_TOKEN', userToken);
  return userToken;
};

// #5
const setUserMMKV = user => {
  storage.set('USER_SECRET', JSON.stringify(user));
};

// #6
const getUserMMKV = () => {
  const user = storage.getString('USER_SECRET');
  return user ? JSON.parse(user) : null;
};

// #7
const clearStorageMMKV = () => storage.clearAll();

export {
  // #1
  setAppTokenMMKV,
  // #2
  getAppTokenMMKV,
  // #3
  getUserTokenMMKV,
  // #4
  setUserTokenMMKV,
  // #5
  setUserMMKV,
  // #6
  getUserMMKV,
  // #7
  clearStorageMMKV,
};
