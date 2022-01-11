// Auth actions
import {
  appTokenRequestAction,
  appTokenSuccessAction,
  appTokenFailureAction,
  loginRequestAction,
  loginSuccessAction,
  loginFailureAction,
  logOutRequestAction,
  logOutSuccessAction,
  logOutFailureAction,
} from './authActions';
// Hotel actions
import {
  getHotelDataRequestAction,
  getHotelDataSuccessAction,
  getHotelDataFailureAction,
  setUserChosenHotelIDAction,
  showHotelModalToChooseAction,
  closeHotelModalAction,
  setDefaultHotelIDAction,
  noHotelFoundAction,
  purgeHotelDataAction,
} from './hotelActions';
// Dashboard actions
import {
  dashboardDataCleanUpAction,
  getDashboardDataRequestAction,
  getDashboardDataSuccessAction,
  getDashboardDataFailureAction,
} from './dashboardActions';
// Reservation actions
import {
  reservationDataCleanUpAction,
  getReservationInitialDataRequestAction,
  getReservationInitialDataSuccessAction,
  getReservationInitialDataFailureAction,
  getReservationNextPageDataRequestAction,
  getReservationNextPageDataSuccessAction,
  getReservationNextPageDataFailureAction,
  reservationLastPageReachedAction,
} from './reservationActions';
// Annual actions
import {
  getAnnualDataRequestAction,
  getAnnualDataSuccessAction,
  getAnnualDataFailureAction,
} from './annualActions';
// Channels actions
import {
  getChannelsDataRequestAction,
  getChannelsDataSuccessAction,
  getChannelsDataFailureAction,
} from './channelsActions';
// Comparison actions
import {
  getComparisonDataRequestAction,
  getComparisonDataSuccessAction,
  getComparisonDataFailureAction,
} from './comparisonActions';
// Arrivals
import {
  getArrivalsDataRequestAction,
  getArrivalsDataSuccessAction,
  getArrivalsDataFailureAction,
  getArrivalsNextPageDataRequestAction,
  getArrivalsNextPageDataSuccessAction,
  getArrivalsNextPageDataFailureAction,
  arrivalsLastPageReachedAction,
  setArrivalsTypeChangeAction,
} from './arrivalsActions';

// Date actions
import {
  setChosenDay,
  setChosenMonth,
  setChosenMonthRange,
  setChosenYear,
} from './dateActions';

export {
  // Auth
  appTokenRequestAction,
  appTokenSuccessAction,
  appTokenFailureAction,
  loginRequestAction,
  loginSuccessAction,
  loginFailureAction,
  logOutRequestAction,
  logOutSuccessAction,
  logOutFailureAction,
  // Hotel
  getHotelDataRequestAction,
  getHotelDataSuccessAction,
  getHotelDataFailureAction,
  setUserChosenHotelIDAction,
  showHotelModalToChooseAction,
  setDefaultHotelIDAction,
  noHotelFoundAction,
  purgeHotelDataAction,
  closeHotelModalAction,
  // Dashboard
  dashboardDataCleanUpAction,
  getDashboardDataRequestAction,
  getDashboardDataSuccessAction,
  getDashboardDataFailureAction,
  // Reservation
  reservationDataCleanUpAction,
  getReservationInitialDataRequestAction,
  getReservationInitialDataSuccessAction,
  getReservationInitialDataFailureAction,
  getReservationNextPageDataRequestAction,
  getReservationNextPageDataSuccessAction,
  getReservationNextPageDataFailureAction,
  reservationLastPageReachedAction,
  // Annual
  getAnnualDataRequestAction,
  getAnnualDataSuccessAction,
  getAnnualDataFailureAction,
  // Channels
  getChannelsDataRequestAction,
  getChannelsDataSuccessAction,
  getChannelsDataFailureAction,
  // Arrivals
  getArrivalsDataRequestAction,
  getArrivalsDataSuccessAction,
  getArrivalsDataFailureAction,
  getArrivalsNextPageDataRequestAction,
  getArrivalsNextPageDataSuccessAction,
  getArrivalsNextPageDataFailureAction,
  arrivalsLastPageReachedAction,
  setArrivalsTypeChangeAction,
  // Comparison
  getComparisonDataRequestAction,
  getComparisonDataSuccessAction,
  getComparisonDataFailureAction,
  // Date
  setChosenDay,
  setChosenMonth,
  setChosenMonthRange,
  setChosenYear,
};
