import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useApi from './useApi';
import { COLORS } from '../constants/theme';
import base64 from 'react-native-base64';
import axios from 'axios';

const { getAllHotelProperties, authenticateIOSApp } = useApi();

export default function APITESTING() {
  const [incomingData, setIncomingData] = useState(null);

  //   const handleAPIButton = async () => {
  //     const token = await AsyncStorage.getItem('token');
  //     try {
  //       await getAllHotelProperties({
  //         token,
  //       }).then(res => {
  //         //get data and save it to a local variable
  //         console.log('DATA', res.data);
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  const base64iosCode = base64.encode(
    process.env.iosISS + ':' + process.env.iosSECRET,
  );

  // const handleAPIButton = async () => {
  //   try {
  //     await authenticateIOSApp().then(res => {
  //       //get data and save it to a local variable
  //       console.log('DATA', res);
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const handleAPIButton = async () => {
  //   try {
  //     fetch('https://reactnative.dev/movies.json', {
  //       method: 'POST',
  //       // headers: {
  //       //   Authorization: `Basic bjBNRTZ3Ulc0enZlWmFxbVE0OXNPemNFS0x1MTNmOGhXT3I3UE9WdDYyV04xMHdBTzRMOXZScXNybFdDOlN2VXRqTUpqaldPdFVRTFVCdUNMZTI1U25CaEZUTUN5RHN6cnFPVmRkeHpiWHBzRFkxRzdyMXBTa1FZYQ==`,
  //       //   'Content-Type': 'application/json',
  //       // },
  //     }).then(response => {
  //       console.log(response.json());
  //     });
  //   } catch (e) {
  //     console.log(`THIS IS ERROR ${e}`);
  //   }
  // };

  const TEST_API_URL = 'https://api.dev.smartbooking.uz';

  const config = {
    method: 'POST',
    url: `${TEST_API_URL}/auth/app`,
    headers: {
      Authorization:
        'Basic VHFlbnh2TmFMTU41S3gyWHBDdmJzd2FLVGFxODJtZ3BDSkJyTmhMNFNZSFZKUGdrQXhEc0RFNG8zekI2Olc4VVJUbHJuM1laZjNwQ292UzE0eFF2OWJSUWUzMm5ZdVNuY1NERWJXcUtMTVV4Z0ZPSFkwYlFPdXdEQg==',
    },
  };
  const [apptoken, setAppToken] = useState(null);

  const handleAPIButton = async () => {
    try {
      return await axios(config).then(response => {
        setAppToken(response.data.access_token);
      });
    } catch (e) {
      alert(e);
    }
  };

  // console.log(`FIRST APP TOKEN =>>> ${apptoken}`);

  const [authtoken, setAuthToken] = useState(null);
  const getHotelDataConfig = {
    url: `https://api.dev.smartbooking.uz/mobile/auth/login`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apptoken}`,
      'Content-Type': 'application/json',
    },
    data: {
      username: 'test@smartbooking.uz',
      password: '12345678',
    },
  };
  const handleGetHotelDataButton = async () => {
    console.log(`INSIDE =>>> ${apptoken}`);
    try {
      return await axios(getHotelDataConfig)
        .then(response => setAuthToken(response.data.access_token))
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };
  
  // GET HOTEL DATA
  const singleHotelDataConfig = {
    url: `https://api.dev.smartbooking.uz/mobile/properties/5`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authtoken}`,
      'Content-Type': 'application/json',
    },
  };

  const getSingleHotelData = async () => {
    console.log(`AUTH TOKEN =>>> ${authtoken}`);
    try {
      return await axios(singleHotelDataConfig)
        .then(response => console.log(response.data))
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={handleAPIButton}
        style={{ backgroundColor: COLORS.blue, padding: 10 }}>
        <Text style={{ color: 'white' }}>ACTIVATE API BUTTON</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleGetHotelDataButton}
        style={{ backgroundColor: COLORS.blue, padding: 10, marginTop: 20 }}>
        <Text style={{ color: 'white' }}>ACTIVATE HOTEL DATA BUTTON</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={getSingleHotelData}
        style={{ backgroundColor: COLORS.blue, padding: 10, marginTop: 20 }}>
        <Text style={{ color: 'white' }}>
          ACTIVATE GET SINGLE HOTEL DATA BUTTON
        </Text>
      </TouchableOpacity>

      <View
        onPress={handleAPIButton}
        style={{ backgroundColor: COLORS.blue, padding: 10, margin: 10 }}>
        <Text style={{ color: 'white' }}>DATA: {incomingData}</Text>
      </View>
    </SafeAreaView>
  );
}
