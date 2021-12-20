import { STATS } from '../types';
import { getStatisticsByCategoryAPI, getStatisticsByYearAPI } from '../../api'

// By category
const getStatsByCategoryDataRequestAction = (chosenStatsDateRange) => {
  return {
    type: STATS.BY_CATEGORY_DATA_REQUEST,
    payload: chosenStatsDateRange
  };
};

const getStatsByCategoryDataSuccessAction = (statisticsByCategoryData) => {
  return {
    type: STATS.BY_CATEGORY_DATA_SUCCESS,
    payload: statisticsByCategoryData
  };
};

const getStatsByCategoryDataFailureAction = (error) => {
  return {
    type: STATS.BY_CATEGORY_DATA_FAILURE,
    payload: error
  };
};

// By year
const getStatsByYearDataRequestAction = (chosenStatsYear) => {
  return {
    type: STATS.BY_YEAR_DATA_REQUEST,
    payload: chosenStatsYear
  };
};

const getStatsByYearDataSuccessAction = (statisticsByYearData) => {
  return {
    type: STATS.BY_YEAR_DATA_SUCCESS,
    payload: statisticsByYearData
  };
};

const getStatsByYearDataFailureAction = (error) => {
  return {
    type: STATS.BY_YEAR_DATA_FAILURE,
    payload: error
  };
};


async function getStatsByCategoryData(chosenStatsDateRange) {
  getStatsByCategoryDataRequestAction(chosenStatsDateRange);
  try {
    await getStatisticsByCategoryAPI(chosenStatsDateRange).then(statisticsByCategoryData => {
      getStatsByCategoryDataSuccessAction(statisticsByCategoryData)
    });
  } catch (error) {
    getStatsByCategoryDataFailureAction(error);
    console.error(error);
  }
}

async function getStatsByYearData(chosenStatsYear) {
  getStatsByYearDataRequestAction(chosenStatsYear);
  try {
    await getStatisticsByYearAPI(chosenStatsYear).then(statisticsByYearData => {
      getStatsByYearDataSuccessAction(statisticsByYearData)
    });
  } catch (error) {
    getStatsByYearDataFailureAction(error);
    console.error(error);
  }
}


export { getStatsByCategoryData, getStatsByYearData };
