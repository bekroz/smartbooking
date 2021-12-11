import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useApi from '../utils/api/useApi';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hotelID, setHotelID] = useState(null);
  const [userToken, setUserToken] = useState(null);
};

const { handleIOSAuthentication, handleIOSAuthorization } = useApi();

const userLogInHandler = async userSecret => {
  setAuthenticated(false);
  setLoading(true);
  try {
    await handleIOSAuthentication().then(appToken => {
      if (appToken) {
        handleIOSAuthorization(userSecret);
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        alert('Unauthenticated device, please contact the support team!');
      }
    });
  } catch (error) {
    setAuthenticated(false);
    setLoading(false);
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
    console.error(error);
    alert('Failed to authenticate the device: ' + error.message);
  }
};

const userLogOutHandler = async () => {
  try {
    await AsyncStorage.clear().then(() => {
      setAuthenticated(false);
      setLoading(false);
      setUserLoggedIn(false);
    });
  } catch (error) {
    console.error(error);
    alert('Failed to log out, try again later: ' + error.message);
  }

  // const data = {
  //   authenticated,
  //   setAuthenticated,
  //   userLoggedIn,
  //   setUserLoggedIn,
  //   error,
  //   setError,
  //   hotelID,
  //   setHotelID,
  //   userToken,
  //   setUserToken,
  //   userLogInHandler,
  //   userLogOutHandler,
  // };

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        userLoggedIn,
        setUserLoggedIn,
        error,
        setError,
        hotelID,
        setHotelID,
        userToken,
        setUserToken,
        userLogInHandler,
        userLogOutHandler,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
