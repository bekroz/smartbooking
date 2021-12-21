import {
  getComparisonDataRequestAction,
  getComparisonDataSuccessAction,
  getComparisonDataFailureAction,
} from '../actions';
import { getPropertiesComparisonDataAPI } from '../../api';

async function getComparisonDataMiddleware(chosenComparisonDate) {
  getComparisonDataRequestAction(chosenComparisonDate);
  try {
    await getPropertiesComparisonDataAPI(chosenComparisonDate).then(
      comparisonData => {
        getComparisonDataSuccessAction(comparisonData);
      },
    );
  } catch (error) {
    getComparisonDataFailureAction(error);
    console.error(error);
  }
}

export default getComparisonDataMiddleware;
