import { DASHBOARD } from '../types';

const dashboardDataCleanUpAction = () => {
  return {
    type: DASHBOARD.DATA_CLEAN_UP,
  };
};

const getDashboardDataRequestAction = () => {
  return {
    type: DASHBOARD.DATA_REQUEST,
  };
};

const getDashboardDataSuccessAction = ({
  availableRooms,
  currentLoad,
  shouldArrived,
  leftArrived,
  shouldCheckout,
  leftCheckout,
  live,
  maxRooms,
  confirmedQuantity,
  confirmedRevenue,
  canceledQuantity,
  canceledRevenue,
}) => {
  return {
    type: DASHBOARD.DATA_SUCCESS,
    payload: {
      availableRooms,
      currentLoad,
      shouldArrived,
      leftArrived,
      shouldCheckout,
      leftCheckout,
      live,
      maxRooms,
      confirmedQuantity,
      confirmedRevenue,
      canceledQuantity,
      canceledRevenue,
    },
  };
};

const getDashboardDataFailureAction = error => {
  return {
    type: DASHBOARD.DATA_FAILURE,
    payload: error,
  };
};

export {
  dashboardDataCleanUpAction,
  getDashboardDataRequestAction,
  getDashboardDataSuccessAction,
  getDashboardDataFailureAction,
};
