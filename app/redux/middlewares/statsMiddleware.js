import {
  getStatsByCategoryDataRequestAction,
  getStatsByCategoryDataSuccessAction,
  getStatsByCategoryDataFailureAction,
  getStatsByYearDataRequestAction,
  getStatsByYearDataSuccessAction,
  getStatsByYearDataFailureAction,
} from '../actions';

async function getStatsByCategoryDataMiddleware(outgoingData) {
  getStatsByCategoryDataRequestAction(chosenStatsDateRange);
  try {
    await getStatisticsByCategoryAPI(outgoingData).then(
      statisticsByCategoryData => {
        getStatsByCategoryDataSuccessAction(statisticsByCategoryData);
      },
    );
  } catch (error) {
    getStatsByCategoryDataFailureAction(error);
    console.error(error);
  }
}

async function getStatsByYearDataMiddleware(outgoingData) {
  getStatsByYearDataRequestAction(chosenStatsYear);
  try {
    await getStatisticsByYearAPI(outgoingData).then(statisticsByYearData => {
      getStatsByYearDataSuccessAction(statisticsByYearData);
    });
  } catch (error) {
    getStatsByYearDataFailureAction(error);
    console.error(error);
  }
}

export { getStatsByCategoryDataMiddleware, getStatsByYearDataMiddleware };
