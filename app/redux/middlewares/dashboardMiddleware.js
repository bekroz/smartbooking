import { getDashboardDataAPI } from '../../api';
import { numberWithSpaces } from '../../helpers';
import {
  getDashboardDataRequestAction,
  getDashboardDataSuccessAction,
  getDashboardDataFailureAction,
} from '../actions';

async function getDashboardDataMiddleware(params) {
  getDashboardDataRequestAction(chosenDashbordDate);
  try {
    await getDashboardDataAPI(params).then(response => {
      const byDateData = response.by_date_data;
      const todayData = response.today_data;
      getDashboardDataSuccessAction({
        availableRooms: byDateData.available_rooms,
        currentLoad: byDateData.current_load,
        leftArrived: byDateData.left_arrived,
        leftCheckout: byDateData.left_checkout,
        live: byDateData.live,
        maxRooms: byDateData.max_rooms,
        shouldArrived: byDateData.should_arrived,
        shouldCheckout: byDateData.should_checkout,
        confirmedQuantity: todayData.confirmed_reservations_data.quantity,
        confirmedRevenue: numberWithSpaces(
          todayData.confirmed_reservations_data.revenue,
        ),
        canceledQuantity: todayData.canceled_reservations_data.quantity,
        canceledRevenue: numberWithSpaces(
          todayData.canceled_reservations_data.revenue,
        ),
      });
    });
  } catch (error) {
    getDashboardDataFailureAction(error);
    console.error(error);
  }
}

export default getDashboardDataMiddleware;
