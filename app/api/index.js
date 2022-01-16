import axios from 'axios';
import Config from '../config/config';
import { store } from '../redux/store';
import {
  appTokenFailureAction,
  loginFailureAction,
  getHotelDataFailureAction,
  noHotelFoundAction,
  getDashboardDataFailureAction,
  getReservationInitialDataFailureAction,
  getReservationNextPageDataFailureAction,
  getAnnualDataFailureAction,
  getChannelsDataFailureAction,
  getComparisonDataFailureAction,
  getArrivalsInitialDataFailureAction,
  getArrivalsNextPageDataFailureAction,
} from '../redux/actions';

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
      return response.data.access_token;
    });
  } catch (error) {
    store.dispatch(appTokenFailureAction(error));
    console.error(error);
  }
};

// #2 API => GET USER token
const handleUserTokenizationAPI = async user => {
  const { appToken } = store.getState().authReducer;
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
  } catch (error) {
    console.error(error);
  }
};

// #3 API => GET All Hotel Properties Data of the user
const getAllHotelPropertiesDataAPI = async () => {
  const { userToken } = store.getState().authReducer;
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
  } catch (error) {
    store.dispatch(getHotelDataFailureAction(error));
    console.error(error);
  }
};

// #4 API => GET Single Hotel Detailed Data of the user
// NOT USED yet
const getSingleHotelDataAPI = async () => {
  const { hotelID } = store.getState().hotelReducer;
  const { userToken } = store.getState().authReducer;
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/properties/${hotelID}`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
  }
};

// #5 API => GET Dashboard Data of the user
const getDashboardDataAPI = async () => {
  const { hotelID } = store.getState().hotelReducer;
  const { userToken } = store.getState().authReducer;
  const { chosenDay } = store.getState().dateReducer;
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${hotelID}/dashboard`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      date: chosenDay,
    }).then(response => {
      return response.data.data;
    });
  } catch (error) {
    store.dispatch(getDashboardDataFailureAction(error));
    console.error(error);
  }
};

// #6 API => GET All Reservations Data
const getAllReservationsDataAPI = async () => {
  const { hotelID } = store.getState().hotelReducer;
  const { userToken } = store.getState().authReducer;
  const { reservationStatus, reservationType, pageIndex } =
    store.getState().reservationReducer;
  const { chosenStartDate, chosenEndDate } = store.getState().dateReducer;
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${hotelID}/reservations`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        status: reservationStatus.status,
        date_range_type: reservationType.status,
        start_date: chosenStartDate,
        end_date: chosenEndDate,
        page: pageIndex,
      },
    }).then(response => {
      return response.data;
    });
  } catch (error) {
    store.dispatch(getReservationInitialDataFailureAction(error));
    console.error(error);
  }
};

// #7 API => GET Hotel Single Reservation Data
const getHotelSingleReservationDataAPI = async () => {
  const { hotelID } = store.getState().hotelReducer;
  const { userToken } = store.getState().authReducer;
  const { reservationID } = store.getState().reservationReducer;
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${hotelID}/reservations/${reservationID}`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
  }
};

// #8 API => GET Reserved room list dataSource
const getArrivalsDataAPI = async () => {
  const { hotelID } = store.getState().hotelReducer;
  const { userToken } = store.getState().authReducer;
  const { chosenDate } = store.getState().dateReducer;
  const { arrivalsType } = store.getState().arrivalsReducer;
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${hotelID}/reservation-rooms`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        type: arrivalsType.status,
        from: chosenDate,
        by: chosenDate,
      },
    }).then(response => {
      return response.data;
    });
  } catch (error) {
    store.dispatch(getArrivalsInitialDataFailureAction(error));
    console.error(error);
  }
};

// #9 API => GET Hotel Annual Statistics
const getAnnualDataAPI = async () => {
  const { hotelID } = store.getState().hotelReducer;
  const { userToken } = store.getState().authReducer;
  const { chosenYear } = store.getState().dateReducer;

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
  } catch (error) {
    store.dispatch(getAnnualDataFailureAction(error));
    console.error(error);
  }
};

// #10 API => GET Hotel Statistics By Channels
const getChannelsDataAPI = async () => {
  const { hotelID } = store.getState().hotelReducer;
  const { userToken } = store.getState().authReducer;
  const { chosenStartDate, chosenEndDate } = store.getState().dateReducer;
  const { reservationType, reservationStatus } =
    store.getState().reservationReducer;

  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/${hotelID}/statistics-by-group`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        start_date: chosenStartDate,
        end_date: chosenEndDate,
        date_range_type: reservationType,
        status: reservationStatus,
      },
    }).then(response => {
      return response.data;
    });
  } catch (error) {
    store.dispatch(getChannelsDataFailureAction(error));
    console.error(error);
  }
};

// #11 API => GET Properties Comparison Data
const getPropertiesComparisonDataAPI = async () => {
  const { userToken } = store.getState().authReducer;
  const { chosenYear, chosenMonth } = store.getState().dateReducer;
  try {
    return await axios({
      url: `${Config.BASE_API_URL}/mobile/compare-properties`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        month: chosenMonth,
        year: chosenYear,
      },
    }).then(response => {
      return response.data.data;
    });
  } catch (error) {
    store.dispatch(getComparisonDataFailureAction(error));
    console.error(error.message);
  }
};

// #12 API => GET Property Sources Data
// NOT USED YET
const getSourcesDataAPI = async () => {
  const { hotelID } = store.getState().hotelReducer;
  const { userToken } = store.getState().authReducer;
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
  } catch (error) {
    console.error(error);
  }
};

export {
  // #1
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
  getArrivalsDataAPI,
  // #9
  getAnnualDataAPI,
  // #10
  getChannelsDataAPI,
  // #11
  getPropertiesComparisonDataAPI,
  // #12
  getSourcesDataAPI,
};
