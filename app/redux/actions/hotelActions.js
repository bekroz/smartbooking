import { HOTEL } from '../types';

const getHotelDataRequestAction = currentHotelID => {
  return {
    type: HOTEL.DATA_REQUEST,
    payload: currentHotelID,
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

const setHotelIDAction = hotelID => {
  return {
    type: HOTEL.SET_HOTEL_ID,
    payload: hotelID,
  };
};

export {
  getHotelDataRequestAction,
  getHotelDataSuccessAction,
  getHotelDataFailureAction,
  setHotelIDAction,
};
