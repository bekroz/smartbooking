import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from '../config';
import moment from 'moment';
const useApi = () => {
  // #1 API => GET iOS APP token

  // STORE THEM in AsyncStorage
  const [appTokenData, setAppTokenData] = useState(null);
  const [userTokenData, setUserTokenData] = useState(null);

  // APP TOKEN DATA TESTER

  const showAppTokenData = async () => {
    const data = await AsyncStorage.getItem('APP_TOKEN');
    try {
      console.log(`THIS IS APP TOKEN TO SHOW =>>>> : ${data}`);
      setAppTokenData(data);
    } catch (error) {
      console.error(error);
    }
    return;
  };

  // USER TOKEN DATA TESTER
  const showUserTokenData = async () => {
    const data = await AsyncStorage.getItem('USER_TOKEN');
    try {
      console.log(`THIS IS USER TOKEN TO SHOW =>>>> : ${data}`);
      setUserTokenData(data);
    } catch (error) {
      console.error(error);
    }
    return;
  };

  const handleIOSAuthentication = async () => {
    try {
      return await axios({
        method: 'POST',
        url: `${Config.BASE_API_URL}/auth/app`,
        headers: {
          Authorization: `Basic ${Config.IOS_BASE64_CODE}`,
        },
      }).then(response => {
        console.log('1. APP TOKEN ===>>>');
        console.log(response.data.access_token);
        AsyncStorage.setItem('APP_TOKEN', response.data.access_token);
      });
    } catch (e) {
      alert(e);
    }
  };

  // #2 API => GET iOS USER token

  const user_secret_outgoing_data = {
    username: 'test@smartbooking.uz',
    password: '12345678',
  };

  const handleIOSAuthorization = async () => {
    const app_token_to_send = await AsyncStorage.getItem('APP_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/auth/login`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${app_token_to_send}`,
          'Content-Type': 'application/json',
        },
        data: user_secret_outgoing_data,
      }).then(response => {
        console.log('2. USER TOKEN ===>>>');
        console.log(response.data.access_token);
        AsyncStorage.setItem('USER_TOKEN', response.data.access_token);
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #3 API => GET All Hotel Properties Data of the user

  const [allHotelData, setAllHotelData] = useState(null);

  const getAllHotelPropertiesData = async () => {
    const user_token_to_send = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/properties`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user_token_to_send}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #4 API => GET All Hotel Properties Data of the user

  const [singleHotelData, setSingleHotelData] = useState(null);

  const getSingleHotelData = async () => {
    const user_token_to_send = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/properties/5`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user_token_to_send}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #5 API => GET Dashboard Data of the user

  const getDashboardData = async (hotelID, chosenDate) => {
    const user_token_to_send = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/${hotelID}/dashboard`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user_token_to_send}`,
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

  // DEFAULT => type_booking_date
  const date_range_type_array = [
    'type_stay_dates',
    'type_checkin',
    'type_checkout',
    'type_booking_date',
  ];

  const getHotelAllReservationsData = async reservations_outgoing_data => {
    const user_token_to_send = await AsyncStorage.getItem('USER_TOKEN');
    console.log(reservations_outgoing_data);
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/${reservations_outgoing_data.hotelID}/reservations`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user_token_to_send}`,
          'Content-Type': 'application/json',
        },
        data: reservations_outgoing_data,
      }).then(response => {
        reservations_outgoing_data.page = response.data.meta.currentPage;
        return response.data.data;
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #7 API => GET Hotel Single Reservation Data

  const getHotelSingleReservationData = async reservationID => {
    const user_token_to_send = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/48/reservations/${reservationID}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user_token_to_send}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #8 API => GET Hotel Statistics By Year

  const [hotelStatisticsByYear, setHotelStatisticsByYear] = useState(null);

  const stat_by_year_outgoing_data = {
    year: '2015',
  };

  const getStatisticsByYear = async () => {
    const user_token_to_send = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/48/statistics-by-year`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user_token_to_send}`,
          'Content-Type': 'application/json',
        },
        data: stat_by_year_outgoing_data,
      })
        .then(response => {
          console.log('8. STATISTICS BY <<< YEAR >>> DATA===>>>');
          console.log(response.data);
          setHotelStatisticsByYear(response.data.data);
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  // #9 API => GET Hotel Statistics By Category

  const [hotelStatisticsByCategory, setHotelStatisticsByCategory] =
    useState(null);

  const stat_by_group_outgoing_data = {
    start_date: '2020-11-01',
    end_date: '2021-11-30',
  };

  const getStatisticsByCategory = async () => {
    const user_token_to_send = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/48/statistics-by-group`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user_token_to_send}`,
          'Content-Type': 'application/json',
        },
        data: stat_by_group_outgoing_data,
      })
        .then(response => {
          console.log('9. STATISTICS BY <<< GROUP >>> DATA ===>>>');
          console.log(response.data);
          setHotelStatisticsByCategory(response.data.data);
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  // #10 API => GET Properties Comparison Data

  const [propertiesComparisonData, setPropertiesComparisonData] =
    useState(null);

  const comparison_outgoing_data = {
    year: '2021',
    month: '11',
  };

  const getPropertiesComparisonData = async () => {
    const user_token_to_send = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/compare-properties`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user_token_to_send}`,
          'Content-Type': 'application/json',
        },
        data: comparison_outgoing_data,
      })
        .then(response => {
          console.log('10. PROPERTIES COMPARISON DATA ===>>>');
          console.log(response.data);
          setPropertiesComparisonData(response.data);
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  // #11 API => GET Property Sources Data

  const [sourcesData, setSourcesData] = useState(null);

  const getSourcesData = async () => {
    const user_token_to_send = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/48/sources`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user_token_to_send}`,
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          console.log('11. SOURCES DATA ===>>>');
          console.log(response.data);
          setSourcesData(response.data);
        })
        .catch(e => console.log(e));
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
