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
import { store } from '../store';

async function getReservationDataMiddleware(params) {
  store.dispatch(getReservationDataRequestAction());
  try {
    return await getAllReservationsDataAPI(params).then(response => {
      const receivedData = response.data;
      params.pageIndex = response.meta.currentPage;
      store.dispatch(getReservationDataSuccessAction(receivedData));
    });
  } catch (error) {
    store.dispatch(getReservationDataFailureAction(error));
    console.error(error);
  }
}

async function getReservationNextPageDataMiddleware(params) {
  const newPageIndex = params.pageIndex++;
  store.dispatch(getReservationNextPageDataRequestAction(newPageIndex));
  try {
    return await getAllReservationsDataAPI(params).then(response => {
      const receivedData = response.data;
      newPageIndex = response.meta.currentPage;
      // let lastData = store.getState().reservationReducer.reservationData;
      // receivedData.forEach(element => {
      //   lastData.push(element);
      // });
      store.dispatch(getReservationNextPageDataSuccessAction(receivedData));
      if (response.meta.current_page === response.meta.last_page) {
        store.dispatch(reservationLastPageReachedAction());
      }
    });
  } catch (error) {
    store.dispatch(getReservationNextPageDataFailureAction(error));
    console.error(error);
  }
}

export { getReservationDataMiddleware, getReservationNextPageDataMiddleware };
