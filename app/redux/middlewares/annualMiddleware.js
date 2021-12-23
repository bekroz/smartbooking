import {
  getAnnualDataRequestAction,
  getAnnualDataSuccessAction,
  getAnnualDataFailureAction,
} from '../actions';
3;
import { getAnnualDataAPI } from '../../api';

async function getAnnualDataMiddleware(annualOutgoingData) {
  store.dispatch(getAnnualDataRequestAction(annualOutgoingData.chosenYear));
  try {
    await getAnnualDataAPI(annualOutgoingData).then(annualData => {
      store.dispatch(getAnnualDataSuccessAction(annualData));
    });
  } catch (error) {
    store.dispatch(getAnnualDataFailureAction(error));
    console.error(error);
  }
}

export default getAnnualDataMiddleware;
