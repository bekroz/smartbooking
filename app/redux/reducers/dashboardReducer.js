import { DASHBOARD } from '../types';

const initialState = {
  loading: true,
  availableRooms: 0,
  currentLoad: 0,
  shouldArrived: 0,
  leftArrived: 0,
  shouldCheckout: 0,
  leftCheckout: 0,
  live: 0,
  maxRooms: 0,
  confirmedQuantity: 0,
  confirmedRevenue: 0,
  canceledQuantity: 0,
  canceledRevenue: 0,
  messageCount: 0,
  error: null,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD.DATA_CLEAN_UP:
      return {
        initialState,
        loading: true,
      };
    case DASHBOARD.DATA_REQUEST:
      return {
        initialState,
        loading: true,
      };
    case DASHBOARD.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        availableRooms: action.payload.availableRooms,
        currentLoad: action.payload.currentLoad,
        shouldArrived: action.payload.shouldArrived,
        leftArrived: action.payload.leftArrived,
        shouldCheckout: action.payload.shouldCheckout,
        leftCheckout: action.payload.leftCheckout,
        live: action.payload.live,
        maxRooms: action.payload.maxRooms,
        confirmedQuantity: action.payload.confirmedQuantity,
        confirmedRevenue: action.payload.confirmedRevenue,
        canceledQuantity: action.payload.canceledQuantity,
        canceledRevenue: action.payload.canceledRevenue,
      };
    case DASHBOARD.DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default dashboardReducer;
