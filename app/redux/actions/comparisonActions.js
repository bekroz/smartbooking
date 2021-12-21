import { COMPARISON } from '../types';

const getComparisonDataRequestAction = chosenComparisonDate => {
  return {
    type: COMPARISON.DATA_REQUEST,
    payload: chosenComparisonDate,
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
