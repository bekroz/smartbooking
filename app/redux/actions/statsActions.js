import { STATS } from '../types';

// By category
const getStatsByCategoryDataRequestAction = chosenStatsDateRange => {
  return {
    type: STATS.BY_CATEGORY_DATA_REQUEST,
    payload: chosenStatsDateRange,
  };
};

const getStatsByCategoryDataSuccessAction = statisticsByCategoryData => {
  return {
    type: STATS.BY_CATEGORY_DATA_SUCCESS,
    payload: statisticsByCategoryData,
  };
};

const getStatsByCategoryDataFailureAction = error => {
  return {
    type: STATS.BY_CATEGORY_DATA_FAILURE,
    payload: error,
  };
};

// By year
const getStatsByYearDataRequestAction = chosenStatsYear => {
  return {
    type: STATS.BY_YEAR_DATA_REQUEST,
    payload: chosenStatsYear,
  };
};

const getStatsByYearDataSuccessAction = statisticsByYearData => {
  return {
    type: STATS.BY_YEAR_DATA_SUCCESS,
    payload: statisticsByYearData,
  };
};

const getStatsByYearDataFailureAction = error => {
  return {
    type: STATS.BY_YEAR_DATA_FAILURE,
    payload: error,
  };
};

export {
  getStatsByCategoryDataRequestAction,
  getStatsByCategoryDataSuccessAction,
  getStatsByCategoryDataFailureAction,
  getStatsByYearDataRequestAction,
  getStatsByYearDataSuccessAction,
  getStatsByYearDataFailureAction,
};
