import { getAllReservationsDataAPI } from '../../api';
import {
  getReservationInitialDataRequestAction,
  getReservationInitialDataSuccessAction,
  getReservationInitialDataFailureAction,
  getReservationNextPageDataRequestAction,
  getReservationNextPageDataSuccessAction,
  getReservationNextPageDataFailureAction,
  reservationLastPageReachedAction,
} from '../actions';
import { store } from '../store';

async function getReservationInitialDataMiddleware() {
  store.dispatch(getReservationInitialDataRequestAction());
  try {
    return await getAllReservationsDataAPI().then(response => {
      if (response.meta.current_page === response.meta.last_page) {
        store.dispatch(reservationLastPageReachedAction());
      }
      const data = {
        reservationData: response.data,
        pageIndex: 2,
        reservationLength: response.meta.total,
      };
      store.dispatch(getReservationInitialDataSuccessAction(data));
    });
  } catch (error) {
    store.dispatch(getReservationInitialDataFailureAction(error));
    console.error(error);
  }
}

async function getReservationNextPageDataMiddleware() {
  store.dispatch(getReservationNextPageDataRequestAction());
  try {
    return await getAllReservationsDataAPI().then(response => {
      if (response.meta.current_page === response.meta.last_page) {
        store.dispatch(reservationLastPageReachedAction());
      }
      const data = {
        reservationData: response.data,
        pageIndex: response.meta.current_page + 1,
      };
      store.dispatch(getReservationNextPageDataSuccessAction(data));
    });
  } catch (error) {
    store.dispatch(getReservationNextPageDataFailureAction(error));
    console.error(error);
  }
}

export {
  getReservationInitialDataMiddleware,
  getReservationNextPageDataMiddleware,
};
