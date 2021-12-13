import axios from 'axios';
import Config from '../../config/config';
import {
  getAppToken,
  setAppToken,
  getUserToken,
  setUserToken,
  clearStorage,
} from './useCustomAsyncStorage';

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
        setAppToken(response.data.access_token);
        return response.data.access_token;
      });
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  // #2 API => GET iOS USER token

  const handleIOSAuthorization = async userSecret => {
    const appToken = await getAppToken();
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
        setUserToken(response.data.access_token);
        return response.data.access_token;
      });
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  // #3 API => GET All Hotel Properties Data of the user
  const getAllHotelPropertiesData = async () => {
    const userToken = await getUserToken();
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/properties`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      }).then(response => {
        console.log('3. ALL HOTEL PROPERTY LIST ===>>>');
        console.log(response.data.data);
        return response.data.data;
      });
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  // #4 API => GET All Hotel Properties Data of the user
  const getSingleHotelData = async () => {
    const userToken = await getUserToken();
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/properties/48`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  // #5 API => GET Dashboard Data of the user

  const getDashboardData = async (hotelID, chosenDate) => {
    const userToken = await getUserToken();
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/48/dashboard`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
        data: chosenDate,
      }).then(response => {
        return response.data.data;
      });
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  // #6 API => GET Hotel All Reservations Data

  const date = new Date();
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  // DEFAULT OUTGOING DATA TO SEND
  let outgoing_data = {
    hotelID: '48',
    date_range_type: 'type_stay_dates',
    start_date: firstDayOfMonth,
    end_date: lastDayOfMonth,
    page: 2,
  };

  const getHotelAllReservationsData = async outgoingData => {
    const userToken = await getUserToken();

    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/${outgoingData.hotelID}/reservations`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
        data: outgoingData,
      }).then(response => {
        return response.data;
      });
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  // #7 API => GET Hotel Single Reservation Data

  const getHotelSingleReservationData = async reservationID => {
    const userToken = await getUserToken();
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/48/reservations/${reservationID}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  // #8 API => GET Reserved room list dataSource

  const getReservedRoomsListData = async outgoingData => {
    const userToken = await getUserToken();
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/${outgoingData.hotelID}/reservation-rooms`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
        data: outgoingData,
      }).then(response => {
        return response.data;
      });
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };
  // #9 API => GET Hotel Statistics By Year

  const getStatisticsByYear = async ({ hotelID, chosenYear }) => {
    const userToken = await getUserToken();
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
      }).then(response => {
        return response.data.data;
      });
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  // #10 API => GET Hotel Statistics By Category

  const getStatisticsByCategory = async dateRange => {
    const userToken = await getUserToken();
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
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  // #11 API => GET Properties Comparison Data

  const getPropertiesComparisonData = async outgoingData => {
    const userToken = await getUserToken();
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/compare-properties`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
        data: outgoingData,
      }).then(response => {
        return response.data;
      });
    } catch (e) {
      console.log(e);
    }
  };

  // #12 API => GET Property Sources Data

  const getSourcesData = async () => {
    const userToken = await getUserToken();
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
    } catch (err) {
      console.error(err);
      alert(err);
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
    getReservedRoomsListData,
    // #9
    getStatisticsByYear,
    // #10
    getStatisticsByCategory,
    // #11
    getPropertiesComparisonData,
    // #12
    getSourcesData,
  };
};

export default useApi;
