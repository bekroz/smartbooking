import { getDashboardDataAPI } from '../../api';
import { numberWithSpaces } from '../../helpers';
import {
  getDashboardDataRequestAction,
  getDashboardDataSuccessAction,
  getDashboardDataFailureAction,
} from '../actions';
import { store } from '../store';

async function getDashboardDataMiddleware() {
  store.dispatch(getDashboardDataRequestAction());
  try {
    return await getDashboardDataAPI().then(response => {
      console.log('====================================');
      console.log(response);
      console.log('====================================');
      const {
        available_rooms,
        current_load,
        left_arrived,
        left_checkout,
        live,
        max_rooms,
        should_arrived,
        should_checkout,
      } = response.by_date_data;
      const confirmedQuantity =
        response.today_data.confirmed_reservations_data.quantity;
      const confirmedRevenue =
        response.todayData.confirmed_reservations_data.revenue;
      const canceledQuantity =
        response.todayData.canceled_reservations_data.quantity;
      const canceledRevenue =
        response.todayData.canceled_reservations_data.revenue;

      store.dispatch(
        getDashboardDataSuccessAction({
          availableRooms: available_rooms,
          currentLoad: current_load,
          leftArrived: left_arrived,
          leftCheckout: left_checkout,
          live: live,
          maxRooms: max_rooms,
          shouldArrived: should_arrived,
          shouldCheckout: should_checkout,
          confirmedQuantity: confirmedQuantity,
          confirmedRevenue: numberWithSpaces(confirmedRevenue),
          canceledQuantity: canceledQuantity,
          canceledRevenue: numberWithSpaces(canceledRevenue),
        }),
      );
    });
  } catch (error) {
    store.dispatch(getDashboardDataFailureAction(error));
    console.error(error);
  }
}

export default getDashboardDataMiddleware;
