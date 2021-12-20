import { COMPARISON } from '../types';
import { getPropertiesComparisonDataAPI } from '../../api';

const getComparisonDataRequestAction = (chosenComparisonDate) => {
  return {
    type: COMPARISON.DATA_REQUEST,
    payload: chosenComparisonDate
  };
};

const getComparisonDataSuccessAction = (comparisonData) => {
  return {
    type: COMPARISON.DATA_SUCCESS,
    payload: comparisonData
  };
};

const getComparisonDataFailureAction = (error) => {
  return {
    type: COMPARISON.DATA_FAILURE,
    payload: error
  };
};

async function getComparisonData(chosenComparisonDate) {
    getComparisonDataRequestAction(chosenComparisonDate);
try {
  await getPropertiesComparisonDataAPI(chosenComparisonDate).then(comparisonData => {
    getComparisonDataSuccessAction(comparisonData);
  });
} catch (error) {
    getComparisonDataFailureAction(error);
  console.error(error);
}
}

export default getComparisonData;
