// Auth middleware
import {
  authMiddleware,
  appTokenMiddleware,
  loginUserMiddleware,
} from './authMiddleware';
// Hotel middleware
import {
  getHotelsDataMiddleware,
  setHotelIDMiddleware,
} from './hotelMiddleware';
// Dashboard middleware
import getDashboardDataMiddleware from './dashboardMiddleware';
// Reservation middleware
import {
  getReservationInitialDataMiddleware,
  getReservationNextPageDataMiddleware,
} from './reservationMiddleware';
// Annual middleware
import getAnnualDataMiddleware from './annualMiddleware';
// Channels middleware
import getChannelsDataMiddleware from './channelsMiddleware';
// Comparison middleware
import getComparisonDataMiddleware from './comparisonMiddleware';
import {
  getArrivalsDataMiddleware,
  getArrivalsNextPageDataMiddleware,
} from './arrivalsMiddleware';
export {
  // Auth
  authMiddleware,
  appTokenMiddleware,
  loginUserMiddleware,
  // Hotel
  getHotelsDataMiddleware,
  setHotelIDMiddleware,
  // Dashboard
  getDashboardDataMiddleware,
  // Reservation
  getReservationInitialDataMiddleware,
  getReservationNextPageDataMiddleware,
  // Annual
  getAnnualDataMiddleware,
  // Channels
  getChannelsDataMiddleware,
  // Comparison
  getComparisonDataMiddleware,
  // Arrivals
  getArrivalsDataMiddleware,
  getArrivalsNextPageDataMiddleware,
};
