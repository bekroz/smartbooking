import axios from 'axios';
import Config from '../config/config';
import {
  getAppToken,
  setAppToken,
  getUserToken,
  setUserToken,
  setUserSecret,
  getUserSecret,
  clearStorage,
} from '../utils/useCustomAsyncStorage';

// #1 API => GET APP token
const handleAppTokenization = async () => {
  try {
    await axios({
      method: 'POST',
      url: `${Config.BASE_API_URL}/auth/app`,
      headers: {
        Authorization: `Basic ${Config.IOS_BASE64_CODE}`,
      },
    }).then(response => {
      // console.log('1. APP TOKEN ===>>>');
      // console.log(response.data.access_token);
      setAppToken(response.data.access_token);
      return response.data.access_token;
    });
  } catch (err) {
    console.error(err);
  }
};

// #2 API => GET USER token
const handleUserTokenization = async () => {
  const appToken = await getAppToken();
  const userSecret = await getUserSecret();
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
      // console.log('2. USER TOKEN ===>>>');
      // console.log(response.data.access_token);
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
      // console.log('3. ALL HOTEL PROPERTY LIST ===>>>');
      // console.log(response.data.data);
      return response.data.data;
    });
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

// #4 API => GET All Hotel Properties Data of the user
const getSingleHotelData = async hotelID => {
  const userToken = await getUserToken();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/properties/${hotelID}`,
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

const getDashboardData = async dashboard_outgoingData => {
  const userToken = await getUserToken();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${dashboard_outgoingData.hotelID}/dashboard`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: dashboard_outgoingData,
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

const getHotelSingleReservationData = async outgoingData => {
  const userToken = await getUserToken();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${outgoingData.hotelID}/reservations/${outgoingData.reservationID}`,
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

const getStatisticsByCategory = async (hotelID, dateRange) => {
  const userToken = await getUserToken();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${hotelID}/statistics-by-group`,
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
    console.error(e);
  }
};

// #12 API => GET Property Sources Data

const getSourcesData = async () => {
  const userToken = await getUserToken();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${hotelID}/sources`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
    }).then(response => {
      // console.log('11. SOURCES DATA ===>>>');
      // console.log(response.data);
      return response.data;
    });
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

export {
  handleAppTokenization,
  // #2
  handleUserTokenization,
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
