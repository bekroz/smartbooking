// Auth middleware
import {
  authMiddleware,
  appTokenMiddleware,
  loginUserMiddleware,
} from './authMiddleware';
// Hotel middleware
import { getHotelsDataMiddleware } from './hotelMiddleware';
// Dashboard middleware
import getDashboardDataMiddleware from './dashboardMiddleware';
// Reservation middleware
import {
  getReservationDataMiddleware,
  getReservationNextPageDataMiddleware,
} from './reservationMiddleware';
// Stats middleware
import {
  getStatsByCategoryDataMiddleware,
  getStatsByYearDataMiddleware,
} from './statsMiddleware';
// Comparison middleware
import getComparisonDataMiddleware from './comparisonMiddleware';

export {
  // Auth
  authMiddleware,
  appTokenMiddleware,
  loginUserMiddleware,
  // Hotel
  getHotelsDataMiddleware,
  // Dashboard
  getDashboardDataMiddleware,
  // Reservation
  getReservationDataMiddleware,
  getReservationNextPageDataMiddleware,
  // Stats
  getStatsByCategoryDataMiddleware,
  getStatsByYearDataMiddleware,
  // Comparison
  getComparisonDataMiddleware,
};
