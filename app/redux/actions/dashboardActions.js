import { DASHBOARD } from '../types';

const getDashboardDataRequestAction = () => {
  return {
    type: DASHBOARD.DATA_REQUEST,
  };
};

const getDashboardDataSuccessAction = dashboardData => {
  return {
    type: DASHBOARD.DATA_SUCCESS,
    payload: dashboardData,
  };
};

const getDashboardDataFailureAction = error => {
  return {
    type: DASHBOARD.DATA_FAILURE,
    payload: error,
  };
};

export {
  getDashboardDataRequestAction,
  getDashboardDataSuccessAction,
  getDashboardDataFailureAction,
};
