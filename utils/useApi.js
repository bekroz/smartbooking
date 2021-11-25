import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64';

const useApi = () => {
  // const base64iosCode = base64.encode(
  //   process.env.iosISS + ':' + process.env.iosSECRET,
  // );
  // const base64androidCode = base64.encode(
  //   process.env.androidISS + ':' + process.env.androidSECRET,
  // );

  // #1 API => Authentification the user
  const authenticateIOSApp = async () => {
    try {
      fetch('https://api.dev.smartbooking.uz/auth/app', {
        method: 'POST',
        headers: {
          Authorization: `Basic bjBNRTZ3Ulc0enZlWmFxbVE0OXNPemNFS0x1MTNmOGhXT3I3UE9WdDYyV04xMHdBTzRMOXZScXNybFdDOlN2VXRqTUpqaldPdFVRTFVCdUNMZTI1U25CaEZUTUN5RHN6cnFPVmRkeHpiWHBzRFkxRzdyMXBTa1FZYQ==`,
          'Content-Type': 'application/json',
        },
      }).then(res => {
        console.log(`THIS IS DATA${res}`);
      });
    } catch (e) {
      console.log(`THIS IS ERROR ${e}`);
    }
  };

  const authenticateANDROIDApp = async ({ base64iosCode }) => {
    try {
      return await axios.put(`${process.env.API_URL}/mobile/auth/login`, {
        headers: {
          Authorization: `Basic ${base64androidCode}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      alert(e);
    }
  };

  // #2 API => Authorization the user
  const authorizeIOSApp = async ({ base64iosCode }) => {
    try {
      await axios.put(`${process.env.TEST_API_URL}/auth/app`, {
        headers: {
          Authorization: `Bearer`,
          token_type: 'Bearer',
          'Content-Type': 'application/json',
        },
      });
      await AsyncStorage.setItem('user', JSON.stringify(data));
    } catch (e) {
      alert(e);
    }
  };

  // return await AsyncStorage.setItem('user', JSON.stringify(data));

  // #3 API => Get all hotel properties

  const getAllHotelProperties = async ({ token }) => {
    try {
      await axios.get(`${process.env.TEST_API_URL}/mobile/properties`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Connection: 'keep-alive',
        },
      });
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  // #4 API => Get only single hotel property data

  const getSingleHotelData = async () => {
    try {
      await axios.get(`${process.env.TEST_API_URL}/properties/:property`),
        {
          headers: {
            Authorization: `Bearer`,
            token_type: 'Bearer',
            'Content-Type': 'application/json',
          },
        };
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  return {
    authenticateIOSApp,
    authenticateANDROIDApp,
    authorizeIOSApp,
    getAllHotelProperties,
    getSingleHotelData,
  };
};

export default useApi;
