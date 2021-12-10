import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from '../config/config';

export default function ApiScreen() {
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
      })
        .then(response => {
          console.log('3. ALL HOTEL PROPERTIES DATA ===>>>');
          console.log(response.data);
          setAllHotelData(response.data);
        })
        .catch(e => console.log(e));
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
      })
        .then(response => {
          console.log('4. SINGLE HOTEL DATA ===>>>');
          console.log(response.data);
          setSingleHotelData(response.data);
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   handleIOSAuthentication().then(response =>
  //     handleIOSAuthorization(response),
  //   );
  // }, []);

  // #5 API => GET Dashboard Data of the user

  const [dashboardData, setDashboardData] = useState(null);
  const dashboard_outgoing_data = {
    date: '2021-11-11',
  };

  const getDashboardData = async () => {
    const user_token_to_send = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/48/dashboard`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user_token_to_send}`,
          'Content-Type': 'application/json',
        },
        data: dashboard_outgoing_data,
      })
        .then(response => {
          console.log('5. DASHBOARD DATA ===>>>');
          console.log(response.data);
          setDashboardData(response.data);
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  // #6 API => GET Hotel All Reservations Data

  const [hotelAllReservationsData, setHotelAllReservationsData] =
    useState(null);
  const reservations_outgoing_data = {
    date_range_type: 'type_stay_dates',
    start_date: '2021-11-01',
    end_date: '2021-11-05',
    status: 'confirmed',
  };

  const getHotelReservationsData = async () => {
    const user_token_to_send = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/48/reservations`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user_token_to_send}`,
          'Content-Type': 'application/json',
        },
        data: reservations_outgoing_data,
      })
        .then(response => {
          console.log('6. ALL RESERVATIONS DATA ===>>>');
          console.log(response.data);
          setHotelAllReservationsData(response.data.data);
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  // #7 API => GET Hotel Single Reservation Data

  const [hotelSingleReservationData, setHotelSingleReservationData] =
    useState(null);

  const reservationID = '7470654901';

  const getHotelSingleReservationData = async () => {
    const user_token_to_send = await AsyncStorage.getItem('USER_TOKEN');
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/48/reservations/${reservationID}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user_token_to_send}`,
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          console.log('7. SINGLE RESERVATION DATA ===>>>');
          console.log(response.data);
          setHotelSingleReservationData(response.data.data);
        })
        .catch(e => console.log(e));
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

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={handleIOSAuthentication}
          style={{ backgroundColor: COLORS.blue, padding: 10 }}>
          <Text style={{ color: 'white' }}>1. GET APP TOKEN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleIOSAuthorization}
          style={{ backgroundColor: COLORS.blue, padding: 10, marginTop: 20 }}>
          <Text style={{ color: 'white' }}>2. GET USER TOKEN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={getAllHotelPropertiesData}
          style={{ backgroundColor: COLORS.blue, padding: 10, marginTop: 20 }}>
          <Text style={{ color: 'white' }}>
            3. GET ALL HOTEL PROPERTIES DATA
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={getSingleHotelData}
          style={{ backgroundColor: COLORS.blue, padding: 15, marginTop: 20 }}>
          <Text style={{ color: 'white' }}>4. GET SINGLE HOTEL DATA </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={getDashboardData}
          style={{ backgroundColor: COLORS.blue, padding: 15, marginTop: 20 }}>
          <Text style={{ color: 'white' }}>5. GET DASHBOARD DATA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={getHotelReservationsData}
          style={{
            backgroundColor: COLORS.blue,
            padding: 15,
            marginTop: 20,
          }}>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>
            6. GET HOTEL ALL RESERVATIONS DATA
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={getHotelSingleReservationData}
          style={{ backgroundColor: COLORS.blue, padding: 15, marginTop: 20 }}>
          <Text style={{ color: 'white' }}>7. GET SINGLE RESERVATION DATA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={getStatisticsByYear}
          style={{ backgroundColor: COLORS.blue, padding: 15, marginTop: 20 }}>
          <Text style={{ color: 'white' }}>8. GET STATISTICS BY YEAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={getStatisticsByCategory}
          style={{ backgroundColor: COLORS.blue, padding: 15, marginTop: 20 }}>
          <Text style={{ color: 'white' }}>9. GET STATISTICS BY CATEGORY</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={getPropertiesComparisonData}
          style={{ backgroundColor: COLORS.blue, padding: 15, marginTop: 20 }}>
          <Text style={{ color: 'white' }}>10. GET COMPARISON DATA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={getSourcesData}
          style={{ backgroundColor: COLORS.blue, padding: 15, marginTop: 20 }}>
          <Text style={{ color: 'white' }}>11. GET SOURCES DATA</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={showAppTokenData}
          style={{ backgroundColor: COLORS.blue, padding: 15, marginTop: 20 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            APP TOKEN:{' '}
          </Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
            }}>{`${appTokenData}`}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={showUserTokenData}
          style={{ backgroundColor: COLORS.blue, padding: 15, marginTop: 20 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            USER TOKEN:
          </Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
            }}>{`${userTokenData}`}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
