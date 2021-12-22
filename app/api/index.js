import axios from 'axios';
import Config from '../config/config';
import {
  setAppTokenMMKV,
  getAppTokenMMKV,
  setUserTokenMMKV,
  getUserTokenMMKV,
  getUserMMKV,
} from '../utils/useMmkvStorage';

// #1 API => GET APP token
const handleAppTokenizationAPI = async () => {
  try {
    return await axios({
      method: 'POST',
      url: `${Config.BASE_API_URL}/auth/app`,
      headers: {
        Authorization: `Basic ${Config.IOS_BASE64_CODE}`,
      },
    }).then(response => {
      const appToken = response.data.access_token;
      setAppTokenMMKV(appToken);
      return appToken;
    });
  } catch (err) {
    console.error(err);
  }
};

// #2 API => GET USER token
const handleUserTokenizationAPI = async user => {
  const appToken = getAppTokenMMKV();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/auth/login`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${appToken}`,
        'Content-Type': 'application/json',
      },
      data: user,
    }).then(response => {
      const userToken = response.data.access_token;
      setUserTokenMMKV(userToken);
      return userToken;
    });
  } catch (err) {
    console.error(err);
  }
};

// #3 API => GET All Hotel Properties Data of the user
const getAllHotelPropertiesDataAPI = async () => {
  const userToken = getUserTokenMMKV();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/properties`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
    }).then(response => {
      return response.data.data;
    });
  } catch (err) {
    console.error(err);
  }
};

// #4 API => GET Single Hotel Detailed Data of the user
const getSingleHotelDataAPI = async hotelID => {
  const userToken = getUserTokenMMKV();
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
  }
};

// #5 API => GET Dashboard Data of the user
const getDashboardDataAPI = async dashboardOutgoingData => {
  const userToken = getUserTokenMMKV();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${dashboardOutgoingData.hotelID}/dashboard`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: dashboardOutgoingData,
    }).then(response => {
      return response.data.data;
    });
  } catch (err) {
    console.error(err);
  }
};

// #6 API => GET All Reservations Data
const getAllReservationsDataAPI = async reservationsOutgoingData => {
  const userToken = getUserTokenMMKV();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${reservationsOutgoingData.hotelID}/reservations`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: reservationsOutgoingData,
    }).then(response => {
      return response.data;
    });
  } catch (err) {
    console.error(err);
  }
};

// #7 API => GET Hotel Single Reservation Data
const getHotelSingleReservationDataAPI =
  async singleReservationOutgoingData => {
    try {
      return await axios({
        url: `${Config.BASE_API_URL}/mobile/${singleReservationOutgoingData.hotelID}/reservations/${singleReservationOutgoingData.reservationID}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

// #8 API => GET Reserved room list dataSource
const getReservedRoomsListDataAPI = async reservedRoomsListOutgoingData => {
  const userToken = getUserTokenMMKV();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${reservedRoomsListOutgoingData.hotelID}/reservation-rooms`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: reservedRoomsListOutgoingData,
    }).then(response => {
      return response.data;
    });
  } catch (err) {
    console.error(err);
  }
};

// #9 API => GET Hotel Statistics By Year
const getStatisticsByYearAPI = async yearStatOutgoingData => {
  const userToken = getUserTokenMMKV();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${yearStatOutgoingData.hotelID}/statistics-by-year`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        year: yearStatOutgoingData,
      },
    }).then(response => {
      return response.data.data;
    });
  } catch (err) {
    console.error(err);
  }
};

// #10 API => GET Hotel Statistics By Category

const getStatisticsByCategoryAPI = async categoryStatOutgoingData => {
  const userToken = getUserTokenMMKV();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${categoryStatOutgoingData.hotelID}/statistics-by-group`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: categoryStatOutgoingData,
    }).then(response => {
      return response;
    });
  } catch (err) {
    console.error(err);
  }
};

// #11 API => GET Properties Comparison Data
const getPropertiesComparisonDataAPI = async comparisonOutgoingData => {
  const userToken = getUserTokenMMKV();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/compare-properties`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: comparisonOutgoingData,
    }).then(response => {
      return response.data;
    });
  } catch (e) {
    console.error(e);
  }
};

// #12 API => GET Property Sources Data
const getSourcesDataAPI = async sourcesOutgoingData => {
  const userToken = getUserTokenMMKV();
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${sourcesOutgoingData.hotelID}/sources`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
    }).then(response => {
      return response.data;
    });
  } catch (err) {
    console.error(err);
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
