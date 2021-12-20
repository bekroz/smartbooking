import { getDashboardDataAPI } from '../../api';
import { DASHBOARD } from '../types/index';

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


async function getDashboardData(params) {
  getDashboardDataRequestAction();
  try {
    await getDashboardDataAPI(params).then(dashboardData => {
      getDashboardDataSuccessAction(dashboardData);
    });
  } catch (error) {
    getDashboardDataFailureAction(error);
    console.error(error);
  }
}

export default getDashboardData;
