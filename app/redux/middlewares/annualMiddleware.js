import {
  getAnnualDataRequestAction,
  getAnnualDataSuccessAction,
  getAnnualDataFailureAction,
} from '../actions';
import { getAnnualDataAPI } from '../../api';

async function getAnnualDataMiddleware() {
  store.dispatch(getAnnualDataRequestAction());
  try {
    await getAnnualDataAPI().then(annualData => {
      store.dispatch(getAnnualDataSuccessAction(annualData));
    });
  } catch (error) {
    store.dispatch(getAnnualDataFailureAction(error));
    console.error(error);
  }
}

export default getAnnualDataMiddleware;
