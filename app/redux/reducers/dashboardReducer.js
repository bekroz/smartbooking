import DASHBOARD from '../types/dashboardTypes';

const initialState = {
  loading: true,
  chosenDashboardDate: null,
  dashboardData: [],
  error: '',
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD.DATA_REQUEST:
      return {
        ...state,
        loading: true,
        chosenDashboardDate: action.payload,
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
