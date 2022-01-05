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

async function getReservationDataMiddleware() {
  store.dispatch(getReservationDataRequestAction());
  try {
    return await getAllReservationsDataAPI().then(response => {
      const pageIndex = response.meta.current_page + 1;
      const data = {
        reservationData: response.data,
        pageIndex: pageIndex,
        reservationLength: response.meta.total,
      };
      store.dispatch(getReservationDataSuccessAction(data));
    });
  } catch (error) {
    store.dispatch(getReservationDataFailureAction(error));
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
      const pageIndex = response.meta.currentPage + 1;
      const data = {
        reservationData: response.data,
        pageIndex: pageIndex,
      };
      store.dispatch(getReservationNextPageDataSuccessAction(data));
    });
  } catch (error) {
    store.dispatch(getReservationNextPageDataFailureAction(error));
    console.error(error);
  }
}

export { getReservationDataMiddleware, getReservationNextPageDataMiddleware };
