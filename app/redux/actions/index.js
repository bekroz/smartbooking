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
    setHotelIDAction,
} from './hotelActions';
// Dashboard actions
import { getDashboardDataRequestAction, getDashboardDataSuccessAction, getDashboardDataFailureAction, }  from './dashboardActions';
// Reservation actions
import {
    getReservationDataRequestAction,
    getReservationDataSuccessAction,
    getReservationDataFailureAction,
    getReservationNextPageDataRequestAction,
    getReservationNextPageDataSuccessAction,
    getReservationNextPageDataFailureAction,
    reservationLastPageReachedAction  } from './reservationActions';
// Stats actions
import { getStatsByCategoryDataRequestAction, 
    getStatsByCategoryDataSuccessAction, 
    getStatsByCategoryDataFailureAction, 
    getStatsByYearDataRequestAction, 
    getStatsByYearDataSuccessAction, 
    getStatsByYearDataFailureAction } from './statsActions';
// Comparison actions
import getComparisonData from './comparisonActions';

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
    setHotelIDAction,
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
    // Stats
    getStatsByCategoryDataRequestAction, 
    getStatsByCategoryDataSuccessAction, 
    getStatsByCategoryDataFailureAction, 
    getStatsByYearDataRequestAction, 
    getStatsByYearDataSuccessAction, 
    getStatsByYearDataFailureAction,
    
};
