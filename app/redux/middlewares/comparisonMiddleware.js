import {
  getComparisonDataRequestAction,
  getComparisonDataSuccessAction,
  getComparisonDataFailureAction,
} from '../actions';
import { getPropertiesComparisonDataAPI } from '../../api';
import { store } from '../store';

async function getComparisonDataMiddleware() {
  store.dispatch(getComparisonDataRequestAction());
  try {
    return await getPropertiesComparisonDataAPI().then(comparisonData => {
      store.dispatch(getComparisonDataSuccessAction(comparisonData));
    });
  } catch (error) {
    store.dispatch(getComparisonDataFailureAction(error));
    console.error(error);
  }
}

export default getComparisonDataMiddleware;
