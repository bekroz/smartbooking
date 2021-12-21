import { STATS } from '../types';

const initialState = {
  loading: false,
  chosenStatsDateRange: {},
  chosenStatsYear: '',
  statisticsByCategoryData: [],
  statisticsByYearData: [],
  error: null,
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    // By category data cases
    case STATS.BY_CATEGORY_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        chosenStatsYear: action.payload,
      };
    case STATS.BY_CATEGORY_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        statisticsByCategoryData: action.payload,
      };
    case STATS.BY_CATEGORY_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    // By year data cases
    case STATS.BY_YEAR_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        chosenStatsYear: action.payload,
      };
    case STATS.BY_YEAR_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        statisticsByYearData: action.payload,
      };
    case STATS.BY_YEAR_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default statsReducer;
