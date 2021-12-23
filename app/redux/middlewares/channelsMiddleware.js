import {
  getChannelsDataRequestAction,
  getChannelsDataSuccessAction,
  getChannelsDataFailureAction,
} from '../actions';
import { getChannelsDataAPI } from '../../api';
import { numberWithSpaces } from '../../helpers';
import { store } from '../store';

async function getChannelsDataMiddleware(chosenDateRange, hotelID) {
  store.dispatch(getChannelsDataRequestAction(chosenDateRange));
  try {
    return await getChannelsDataAPI(chosenDateRange, hotelID).then(response => {
      let channelsData = response?.data;
      let totalRevenue = response?.total_revenue;
      let totalSoldNights = response?.total_sold_night;
      let totalAverageSum = response?.total_average_sum;

      store.dispatch(
        getChannelsDataSuccessAction(
          channelsData,
          totalRevenue,
          totalSoldNights,
          totalAverageSum,
        )
      );
    });
  } catch (error) {
    store.dispatch(getChannelsDataFailureAction(error));
    console.error(error);
  }
}

export default getChannelsDataMiddleware;
