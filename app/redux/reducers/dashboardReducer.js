import { DASHBOARD } from '../types';

const initialState = {
  loading: true,
  dashboardData: [],
  error: null,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD.DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DASHBOARD.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dashboardData: action.payload,
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
