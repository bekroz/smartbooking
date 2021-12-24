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

const showHotelModalToChooseAction = () => {
  return {
    type: HOTEL.MODAL_TO_CHOOSE_HOTEL_ID,
  };
};

const setUserChosenHotelIDAction = ({ hotelID, hotelName }) => {
  return {
    type: HOTEL.SET_USER_CHOSEN_HOTEL_ID,
    payload: {
      hotelID,
      hotelName,
    },
  };
};

const setDefaultHotelIDAction = ({ hotelID, hotelName }) => {
  return {
    type: HOTEL.SET_DEFAULT_HOTEL_ID,
    payload: {
      hotelID,
      hotelName,
    },
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
  showHotelModalToChooseAction,
  setDefaultHotelIDAction,
  noHotelFoundAction,
};
