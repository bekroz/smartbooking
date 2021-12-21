import { getAllReservationsDataAPI } from '../../api';
import {
  getReservationDataRequestAction,
  getReservationDataSuccessAction,
  getReservationDataFailureAction,
  getReservationNextPageDataRequestAction,
  getReservationNextPageDataSuccessAction,
  getReservationNextPageDataFailureAction,
  reservationLastPageReachedAction,
} from '../actions';

async function getReservationDataMiddleware(params) {
  getReservationDataRequestAction();
  try {
    await getAllReservationsDataAPI(params).then(response => {
      const receivedData = response.data;
      params.page = response.meta.currentPage;
      getReservationDataSuccessAction(receivedData);
    });
  } catch (error) {
    getReservationDataFailureAction(error);
    console.error(error);
  }
}

async function getReservationNextPageDataMiddleware(params) {
  params.page++;
  getReservationNextPageDataRequestAction(params.page);
  try {
    await getAllReservationsDataAPI(params).then(response => {
      const receivedData = response.data;
      params.page = response.meta.currentPage;
      let lastData = store.getState().reservationState.reservationData;
      receivedData.forEach(element => {
        lastData.push(element);
      });

      getReservationNextPageDataSuccessAction(lastData);
      if (response.meta.current_page === response.meta.last_page) {
        reservationLastPageReachedAction();
      }
    });
  } catch (error) {
    getReservationNextPageDataFailureAction(error);
    console.error(error);
  }
}

export { getReservationDataMiddleware, getReservationNextPageDataMiddleware };
