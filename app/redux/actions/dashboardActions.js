import { DASHBOARD } from '../types';

const getDashboardDataRequestAction = chosenDashbordDate => {
  return {
    type: DASHBOARD.DATA_REQUEST,
    payload: chosenDashbordDate,
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
