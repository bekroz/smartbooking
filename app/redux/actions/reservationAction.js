import { getHotelAllReservationsData } from '../../api';
import { RESERVATION } from '../types/index';
import { store } from '../../redux/store';

const getReservationDataRequestAction = () => {
  return {
    type: RESERVATION.DATA_REQUEST,
  };
};

const getReservationDataSuccessAction = reservationData => {
  return {
    type: RESERVATION.DATA_SUCCESS,
    reservationData: reservationData,
  };
};

const getReservationDataFailureAction = error => {
  return {
    type: RESERVATION.DATA_FAILURE,
    error: error,
  };
};

const getReservationNextPageDataSuccessAction = reservationData => {
  return {
    type: RESERVATION.NEXT_PAGE_REQUEST,
    reservationData: reservationData,
  };
};

const getReservationNextPageDataRequestAction = reservationData => {
  return {
    type: RESERVATION.NEXT_PAGE_SUCCESS,
    reservationData: reservationData,
  };
};

const getReservationNextPageDataFailureAction = error => {
  return {
    type: RESERVATION.NEXT_PAGE_FAILURE,
    error: error,
  };
};

const lastPageReachedAction = () => {
  return {
    type: RESERVATION.LAST_PAGE_REACHED,
  };
};

async function getData(params) {
    getReservationDataRequestAction();
  try {
    await getHotelAllReservationsData(params).then(response => {
      const receivedData = response.data;
      params.page = response.meta.currentPage;
      getReservationDataSuccessAction(receivedData);
    });
  } catch (error) {
    getReservationDataFailureAction(error);
    console.error(error);
  }
}

async function getNextPageData(params) {
  params.page++;
  getReservationNextPageDataRequestAction(params.page);
  try {
    await getHotelAllReservationsData(params).then(response => {
      const receivedData = response.data;
      params.page = response.meta.currentPage;
      let lastData = store.getState().reservationReducer.reservationData;
      receivedData.forEach(element => {
        lastData.push(element);
      });

      getReservationNextPageDataSuccessAction(lastData);
      if (response.meta.current_page === response.meta.last_page) {
        lastPageReachedAction();
      }
    });
  } catch (error) {
    getReservationNextPageDataFailureAction(error);
    console.error(error);
  }
}
export { getData, getNextPageData };
