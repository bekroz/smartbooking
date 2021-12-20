import DASHBOARD from '../types/dashboardTypes';

const initialState = {
  loading: false,
  dashboardData: [],
  error: '',
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
        dashboardData: action.dashboardData,
      };
    case DASHBOARD.DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return { ...state };
  }
};
export default dashboardReducer;
