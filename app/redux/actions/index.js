// Auth actions
import {
  appTokenRequestAction,
  appTokenSuccessAction,
  appTokenFailureAction,
  loginRequestAction,
  loginSuccessAction,
  loginFailureAction,
} from './authActions';
// Hotel actions
import {
  getHotelDataRequestAction,
  getHotelDataSuccessAction,
  getHotelDataFailureAction,
  setUserChosenHotelIDAction,
  showHotelModalToChooseAction,
  setDefaultHotelIDAction,
  noHotelFoundAction,
} from './hotelActions';
// Dashboard actions
import {
  getDashboardDataRequestAction,
  getDashboardDataSuccessAction,
  getDashboardDataFailureAction,
} from './dashboardActions';
// Reservation actions
import {
  getReservationDataRequestAction,
  getReservationDataSuccessAction,
  getReservationDataFailureAction,
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

export {
  // Auth
  appTokenRequestAction,
  appTokenSuccessAction,
  appTokenFailureAction,
  loginRequestAction,
  loginSuccessAction,
  loginFailureAction,
  // Hotel
  getHotelDataRequestAction,
  getHotelDataSuccessAction,
  getHotelDataFailureAction,
  setUserChosenHotelIDAction,
  showHotelModalToChooseAction,
  setDefaultHotelIDAction,
  noHotelFoundAction,
  // Dashboard
  getDashboardDataRequestAction,
  getDashboardDataSuccessAction,
  getDashboardDataFailureAction,
  // Reservation
  getReservationDataRequestAction,
  getReservationDataSuccessAction,
  getReservationDataFailureAction,
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
};
