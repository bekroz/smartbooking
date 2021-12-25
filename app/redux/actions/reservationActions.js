import { RESERVATION } from '../types';

const getReservationDataRequestAction = () => {
  return {
    type: RESERVATION.DATA_REQUEST,
  };
};

const getReservationDataSuccessAction = ({
  reservationData,
  pageIndex,
  reservationLength,
}) => {
  return {
    type: RESERVATION.DATA_SUCCESS,
    payload: {
      reservationData,
      pageIndex,
      reservationLength,
    },
  };
};

const getReservationDataFailureAction = error => {
  return {
    type: RESERVATION.DATA_FAILURE,
    payload: error,
  };
};

const getReservationNextPageDataRequestAction = () => {
  return {
    type: RESERVATION.NEXT_PAGE_REQUEST,
  };
};

const getReservationNextPageDataSuccessAction = ({
  reservationData,
  pageIndex,
  reservationLength,
}) => {
  return {
    type: RESERVATION.NEXT_PAGE_SUCCESS,
    payload: {
      reservationData,
      pageIndex,
      reservationLength,
    },
  };
};

const getReservationNextPageDataFailureAction = error => {
  return {
    type: RESERVATION.NEXT_PAGE_FAILURE,
    payload: error,
  };
};

const reservationLastPageReachedAction = () => {
  return {
    type: RESERVATION.LAST_PAGE_REACHED,
  };
};

export {
  getReservationDataRequestAction,
  getReservationDataSuccessAction,
  getReservationDataFailureAction,
  getReservationNextPageDataRequestAction,
  getReservationNextPageDataSuccessAction,
  getReservationNextPageDataFailureAction,
  reservationLastPageReachedAction,
};
