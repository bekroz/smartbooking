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
const setUser = user => {
  return AsyncStorage.setItem('USER_SECRET', JSON.stringify(user));
};
// #6
const getUser = async () => {
  const user = await AsyncStorage.getItem('USER_SECRET');
  return user ? JSON.parse(user) : null;
};

// #7
const clearStorage = async () => {
  return AsyncStorage.clear();
};

// #8
const checkUserStateAsyncStorage = async () => {
	const user = await getUser();
  const userToken = await getUserToken();
	return {
    user: user,
		userToken: userToken,
	};
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
  setUser,
  // #6
  getUser,
  // #7
  clearStorage,
  // #8
  checkUserStateAsyncStorage,
};
