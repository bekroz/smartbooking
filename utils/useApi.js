import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from '../config';
import moment from 'moment';
const useApi = () => {
  // #1 API => GET iOS APP token
  const handleIOSAuthentication = async () => {
    try {
      await axios({
        method: 'POST',
        url: `${Config.BASE_API_URL}/auth/app`,
        headers: {
          Authorization: `Basic ${Config.IOS_BASE64_CODE}`,
        },
      }).then(response => {
        console.log('1. APP TOKEN ===>>>');
        console.log(response.data.access_token);
        AsyncStorage.setItem('APP_TOKEN', response.data.access_token);
        return response.data.access_token;
      });
    } catch (e) {
      alert(e);
    }
  };

  // #2 API => GET iOS USER token

  const handleIOSAuthorization = async userSecret => {
    const appToken = await AsyncStorage.getItem('APP_TOKEN');
     // const user = JSON.parse(AsyncStorage.getItem('USER'));
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/auth/login`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${appToken}`,
          'Content-Type': 'application/json',
        },
        data: {
          username: userSecret.email,
          password: userSecret.password,
        },
      }).then(response => {
        console.log('2. USER TOKEN ===>>>');
        console.log(response.data.access_token);
        AsyncStorage.setItem('USER_TOKEN', response.data.access_token);
        return response.data.access_token;
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #3 API => GET All Hotel Properties Data of the user

  const getAllHotelPropertiesData = async () => {
    const userToken = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/properties`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #4 API => GET All Hotel Properties Data of the user

  const getSingleHotelData = async () => {
    const userToken = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/properties/5`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #5 API => GET Dashboard Data of the user

  const getDashboardData = async (hotelID, chosenDate) => {
    const userToken = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/${hotelID}/dashboard`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
        data: chosenDate,
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #6 API => GET Hotel All Reservations Data

  const date = new Date();
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  // DEFAULT OUTGOING DATA TO SEND
  let reservations_outgoing_data = {
    hotelID: '48',
    date_range_type: 'type_stay_dates',
    start_date: firstDayOfMonth,
    end_date: lastDayOfMonth,
    page: 2,
  };

  const getHotelAllReservationsData = async reservations_outgoing_data => {
    const userToken = await AsyncStorage.getItem('USER_TOKEN');
    console.log(reservations_outgoing_data);
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/${reservations_outgoing_data.hotelID}/reservations`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
        data: reservations_outgoing_data,
      }).then(response => {
        return response.data;
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #7 API => GET Hotel Single Reservation Data

  const getHotelSingleReservationData = async reservationID => {
    const userToken = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/48/reservations/${reservationID}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #8 API => GET Hotel Statistics By Year

  const getStatisticsByYear = async ({ hotelID, chosenYear }) => {
    const userToken = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/${hotelID}/statistics-by-year`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
        data: {
          year: chosenYear,
        },
      })
        .then(response => {
          return response.data.data;
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  // #9 API => GET Hotel Statistics By Category

  const getStatisticsByCategory = async dateRange => {
    const userToken = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/48/statistics-by-group`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
        data: dateRange,
      }).then(response => {
        return response;
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #10 API => GET Properties Comparison Data

  const getPropertiesComparisonData = async comparison_outgoing_data => {
    const userToken = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/compare-properties`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
        data: comparison_outgoing_data,
      }).then(response => {
        return response.data;
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #11 API => GET Property Sources Data

  const getSourcesData = async () => {
    const userToken = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/48/sources`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      }).then(response => {
        console.log('11. SOURCES DATA ===>>>');
        console.log(response.data);
        return response.data;
      });
    } catch (e) {
      console.log(e);
    }
  };

  return {
    // #1
    handleIOSAuthentication,
    // #2
    handleIOSAuthorization,
    // #3
    getAllHotelPropertiesData,
    // #4
    getSingleHotelData,
    // #5
    getDashboardData,
    // #6
    getHotelAllReservationsData,
    // #7
    getHotelSingleReservationData,
    // #8
    getStatisticsByYear,
    // #9
    getStatisticsByCategory,
    // #10
    getPropertiesComparisonData,
    // #11
    getSourcesData,
  };
};

export default useApi;
