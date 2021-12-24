import { COMPARISON } from '../types';

const getComparisonDataRequestAction = () => {
  return {
    type: COMPARISON.DATA_REQUEST,
  };
};

const getComparisonDataSuccessAction = comparisonData => {
  return {
    type: COMPARISON.DATA_SUCCESS,
    payload: comparisonData,
  };
};

const getComparisonDataFailureAction = error => {
  return {
    type: COMPARISON.DATA_FAILURE,
    payload: error,
  };
};

export {
  getComparisonDataRequestAction,
  getComparisonDataSuccessAction,
  getComparisonDataFailureAction,
};
