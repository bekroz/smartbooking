import {
  getArrivalsDataRequestAction,
  getArrivalsDataSuccessAction,
  getArrivalsDataFailureAction,
  getArrivalsNextPageDataRequestAction,
  getArrivalsNextPageDataSuccessAction,
  getArrivalsNextPageDataFailureAction,
  arrivalsLastPageReachedAction,
} from '../actions';
import { getArrivalsDataAPI } from '../../api';
import { store } from '../store';

async function getArrivalsDataMiddleware() {
  try {
    return await getArrivalsDataAPI().then(response => {
      const pageIndex = response.meta.current_page + 1;
      const data = {
        arrivalsData: response.data,
        pageIndex: pageIndex,
        arrivalsLength: response.meta.total,
      };
      store.dispatch(getArrivalsDataSuccessAction(data));
    });
  } catch (error) {
    store.dispatch(getArrivalsDataFailureAction(error));
    console.error(error);
  }
}
async function getArrivalsNextPageDataMiddleware() {
  store.dispatch(getArrivalsNextPageDataRequestAction());
  try {
    return await getArrivalsDataAPI().then(response => {
      if (response.meta.current_page === response.meta.last_page) {
        store.dispatch(arrivalsLastPageReachedAction());
      }
      const pageIndex = response.meta.currentPage + 1;
      const data = {
        arrivalsdata: response.data,
        pageIndex: pageIndex,
      };
      store.dispatch(getArrivalsNextPageDataSuccessAction(data));
    });
  } catch (error) {
    store.dispatch(getArrivalsNextPageDataFailureAction(error));
    console.error(error);
  }
}

export { getArrivalsDataMiddleware, getArrivalsNextPageDataMiddleware };
