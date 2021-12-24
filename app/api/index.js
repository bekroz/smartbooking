import axios from 'axios';
import Config from '../config/config';
import { store } from '../redux/store';

// #1 API => GET APP token
const { hotelID } = store.getState().hotelReducer;
const { chosenDay, chosenMonth, chosenMonthRange, chosenYear } =
  store.getState().dateReducer;
const { reservationType, reservationStatus, reservationID } =
  store.getState().reservationReducer;

const handleAppTokenizationAPI = async () => {
  try {
    return await axios({
      method: 'POST',
      url: `${Config.BASE_API_URL}/auth/app`,
      headers: {
        Authorization: `Basic ${Config.IOS_BASE64_CODE}`,
      },
    }).then(response => {
      return response.data.access_token;
    });
  } catch (err) {
    console.error(err);
  }
};

// #2 API => GET USER token
const handleUserTokenizationAPI = async user => {
  const { appToken } = await store.getState().authReducer;
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
      return response.data.access_token;
    });
  } catch (err) {
    console.error(err);
  }
};

// #3 API => GET All Hotel Properties Data of the user
const getAllHotelPropertiesDataAPI = async () => {
  const { userToken } = await store.getState().authReducer;
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
const getSingleHotelDataAPI = async () => {
  const { hotelID } = await store.getState().hotelReducer;
  const { userToken } = await store.getState().authReducer;
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
const getDashboardDataAPI = async () => {
  const { hotelID } = await store.getState().hotelReducer;
  const { userToken } = await store.getState().authReducer;
  const { chosenDay } = await store.getState().dateReducer;
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${hotelID}/dashboard`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: chosenDay,
    }).then(response => {
      return response.data.data;
    });
  } catch (err) {
    console.error(err);
  }
};

// #6 API => GET All Reservations Data
const getAllReservationsDataAPI = async () => {
  const { hotelID } = await store.getState().hotelReducer;
  const { userToken } = await store.getState().authReducer;
  const { reservationType } = await store.getState().reservationReducer;
  const { chosenMonthRange } = await store.getState().dateReducer;
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${hotelID}/reservations`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        date_range_type: reservationType,
        start_date: chosenMonthRange.startDate,
        end_date: chosenMonthRange.endDate,
      },
    }).then(response => {
      return response.data;
    });
  } catch (err) {
    console.error(err);
  }
};

// #7 API => GET Hotel Single Reservation Data
const getHotelSingleReservationDataAPI = async () => {
  const { hotelID } = await store.getState().hotelReducer;
  const { userToken } = await store.getState().authReducer;
  const { reservationID } = await store.getState().reservationReducer;
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${hotelID}/reservations/${reservationID}`,
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
const getReservedRoomsListDataAPI = async () => {
  const { hotelID } = await store.getState().hotelReducer;
  const { userToken } = await store.getState().authReducer;
  const { reservationType } = await store.getState().reservationReducer;
  const { chosenDay } = await store.getState().chosenDay;
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${hotelID}/reservation-rooms`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        type: reservationType,
        from: chosenDay,
        by: chosenDay,
      },
    }).then(response => {
      return response.data;
    });
  } catch (err) {
    console.error(err);
  }
};

// #9 API => GET Hotel Annual Statistics
const getAnnualDataAPI = async () => {
  const { hotelID } = await store.getState().hotelReducer;
  const { userToken } = await store.getState().authReducer;
  const { chosenYear } = await store.getState().chosenYear;
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
  }
};

// #10 API => GET Hotel Statistics By Channels
const getChannelsDataAPI = async () => {
  const { hotelID } = await store.getState().hotelReducer;
  const { userToken } = await store.getState().authReducer;
  const { chosenMonthRange } = await store.getState().dateReducer;
  const { reservationType, reservationStatus } = await store.getState()
    .reservationReducer;
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${hotelID}/statistics-by-group`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        start_date: chosenMonthRange.startDate,
        end_date: chosenMonthRange.endDate,
        date_range_type: reservationType,
        status: reservationStatus,
      },
    }).then(response => {
      return response.data;
    });
  } catch (error) {
    console.error(error);
  }
};

// #11 API => GET Properties Comparison Data
const getPropertiesComparisonDataAPI = async () => {
  const { userToken } = await store.getState().authReducer;
  const { chosenYear, chosenMonth } = await store.getState().dateReducer;
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/compare-properties`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        year: chosenYear,
        month: chosenMonth,
      },
    }).then(response => {
      return response.data;
    });
  } catch (e) {
    console.error(e);
  }
};

// #12 API => GET Property Sources Data
const getSourcesDataAPI = async () => {
  const { hotelID } = await store.getState().hotelReducer;
  const { userToken } = await store.getState().authReducer;
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${hotelID}/sources`,
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
  getAnnualDataAPI,
  // #10
  getChannelsDataAPI,
  // #11
  getPropertiesComparisonDataAPI,
  // #12
  getSourcesDataAPI,
};
