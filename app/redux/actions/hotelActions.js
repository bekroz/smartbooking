import { HOTEL } from '../types';

const getHotelDataRequestAction = () => {
  return {
    type: HOTEL.DATA_REQUEST,
  };
};

const getHotelDataSuccessAction = hotelList => {
  return {
    type: HOTEL.DATA_SUCCESS,
    payload: hotelList,
  };
};

const getHotelDataFailureAction = error => {
  return {
    type: HOTEL.DATA_FAILURE,
    payload: error,
  };
};

const setUserChosenHotelIDAction = hotelID => {
  return {
    type: HOTEL.SET_USER_CHOSEN_HOTEL_ID,
    payload: hotelID,
  };
};

const setDefaultHotelIDAction = hotelID => {
  return {
    type: HOTEL.SET_DEFAULT_HOTEL_ID,
    payload: hotelID,
  };
};

const noHotelFoundAction = () => {
  return {
    type: HOTEL.NO_HOTEL_FOUND,
  };
};

export {
  getHotelDataRequestAction,
  getHotelDataSuccessAction,
  getHotelDataFailureAction,
  setUserChosenHotelIDAction,
  setDefaultHotelIDAction,
  noHotelFoundAction,
};
