import axios from 'axios';
import Config from '../config/config';
import {
  getAppToken,
  setAppToken,
  getUserToken,
  setUserToken,
  setUserSecret,
  getUser,
  clearStorage,
} from '../utils/useCustomAsyncStorage';

// #1 API => GET APP token
const handleAppTokenizationAPI = async () => {
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
  }
};

// #2 API => GET USER token
const handleUserTokenizationAPI = async (user) => {
  const appToken = await getAppToken();
  // const user = await getUser();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/auth/login`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${appToken}`,
        'Content-Type': 'application/json',
      },
     data: user
      // data: outgoingData.user
      // data: {
      //   username: outgoingData.user.email,
      //   password: outgoingData.user.password,
      // },
    }).then(response => {
      // console.log('2. USER TOKEN ===>>>');
      // console.log(response.data.access_token);
      // setUserToken(response.data.access_token);
      return response.data.access_token;
    });
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

// #3 API => GET All Hotel Properties Data of the user
const getAllHotelPropertiesDataAPI = async () => {
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
      // console.log('3. ALL HOTELS LIST ===>>>');
      // console.log(response.data.data);
      return response.data.data;
    });
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

// #4 API => GET Single Hotel Detailed Data of the user
const getSingleHotelDataAPI = async (hotelID) => {
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
const getDashboardDataAPI = async outgoingData => {
  // const userToken = await getUserToken();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${outgoingData.hotelID}/dashboard`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${outgoingData.userToken}`,
        'Content-Type': 'application/json',
      },
      data: outgoingData.dashboardOutgoingData,
    }).then(response => {
      return response.data.data;
    });
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

// #6 API => GET All Reservations Data
const getAllReservationsDataAPI = async outgoingData => {
  // const userToken = await getUserToken();

  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${outgoingData.hotelID}/reservations`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${outgoingData.userToken}`,
        'Content-Type': 'application/json',
      },
      data: outgoingData.reservationsOutgoingData,
    }).then(response => {
      return response.data;
    });
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

// #7 API => GET Hotel Single Reservation Data
const getHotelSingleReservationDataAPI = async outgoingData => {
  // const userToken = await getUserToken();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${outgoingData.hotelID}/reservations/${outgoingData.reservationID}`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${outgoingData.userToken}`,
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

// #8 API => GET Reserved room list dataSource
const getReservedRoomsListDataAPI = async outgoingData => {
  // const userToken = await getUserToken();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${outgoingData.hotelID}/reservation-rooms`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${outgoingData.userToken}`,
        'Content-Type': 'application/json',
      },
      data: outgoingData.reservedRoomsOutgoingData,
    }).then(response => {
      return response.data;
    });
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

// #9 API => GET Hotel Statistics By Year
const getStatisticsByYearAPI = async (outgoingData) => {
  // const userToken = await getUserToken();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${outgoingData.hotelID}/statistics-by-year`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${outgoingData.userToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        year: outgoingData.chosenStatYear,
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

const getStatisticsByCategoryAPI = async (outgoingData) => {
  // const userToken = await getUserToken();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${outgoingData.hotelID}/statistics-by-group`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${outgoingData.userToken}`,
        'Content-Type': 'application/json',
      },
      data: outgoingData
    }).then(response => {
      return response;
    });
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

// #11 API => GET Properties Comparison Data
const getPropertiesComparisonDataAPI = async outgoingData => {
  // const userToken = await getUserToken();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/compare-properties`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${outgoingData.userToken}`,
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
const getSourcesDataAPI = async (outgoingData) => {
  // const userToken = await getUserToken();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${outgoingData.hotelID}/sources`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${outgoingData.userToken}`,
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
  handleAppTokenizationAPI,
  // #2
  handleUserTokenizationAPI,
  // #3
  getAllHotelPropertiesDataAPI,
  // #4
  getSingleHotelDataAPI,
  // #5
  getDashboardDataAPI,
  // #6
  getAllReservationsDataAPI,
  // #7
  getHotelSingleReservationDataAPI,
  // #8
  getReservedRoomsListDataAPI,
  // #9
  getStatisticsByYearAPI,
  // #10
  getStatisticsByCategoryAPI,
  // #11
  getPropertiesComparisonDataAPI,
  // #12
  getSourcesDataAPI,
};
