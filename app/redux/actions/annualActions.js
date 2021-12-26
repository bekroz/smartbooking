import { ANNUAL } from '../types';

const getAnnualDataRequestAction = () => {
  return {
    type: ANNUAL.DATA_REQUEST,
  };
};

const getAnnualDataSuccessAction = annualData => {
  return {
    type: ANNUAL.DATA_SUCCESS,
    payload: annualData,
  };
};

const getAnnualDataFailureAction = error => {
  return {
    type: ANNUAL.DATA_FAILURE,
    payload: error,
  };
};

export {
  getAnnualDataRequestAction,
  getAnnualDataSuccessAction,
  getAnnualDataFailureAction,
};
