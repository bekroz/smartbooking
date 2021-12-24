import { CHANNELS } from '../types';

const initialState = {
  loading: true,
  chosenDateRange: null,
  channelsData: [],
  totalRevenue: null,
  totalSoldNights: null,
  totalAverageSum: null,
  error: null,
};

const channelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANNELS.DATA_REQUEST:
      return {
        ...state,
        loading: true,
        chosenDateRange: action.payload,
      };
    case CHANNELS.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        channelsData: action.payload.channelsData,
        totalRevenue: action.payload.totalRevenue,
        totalSoldNights: action.payload.totalSoldNights,
        totalAverageSum: action.payload.totalAverageSum,
      };
    case CHANNELS.DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default channelsReducer;
