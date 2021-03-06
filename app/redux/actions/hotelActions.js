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

const closeHotelModalAction = () => {
  return {
    type: HOTEL.CLOSE_MODAL_WITH_HOTEL_ID,
  };
};

const setUserChosenHotelIDAction = ({ id, name }) => {
  return {
    type: HOTEL.SET_USER_CHOSEN_HOTEL_ID,
    payload: {
      hotelID: id,
      hotelName: name,
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

const purgeHotelDataAction = () => {
  return {
    type: HOTEL.PURGE_ALL_DATA,
  };
};

export {
  getHotelDataRequestAction,
  getHotelDataSuccessAction,
  getHotelDataFailureAction,
  setUserChosenHotelIDAction,
  showHotelModalToChooseAction,
  closeHotelModalAction,
  setDefaultHotelIDAction,
  noHotelFoundAction,
  purgeHotelDataAction,
};
