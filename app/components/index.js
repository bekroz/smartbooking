// General components
import LoadingIndicator from './Loaders/LoadingIndicator';
import SpaceForScroll from './SpaceForScroll';
import FadeInView from './FadeInView';
import GoBackButton from './Buttons/GoBackButton';
import {
  NoDataToShow,
  NoFutureDataToShow,
  NoNetwork,
} from './Alerts/UserAlerts';
// Dashboard
import {
  HotelModal,
  HotelNameBar,
  CalendarModal,
  DayPicker,
  PercentageCircle,
  EmptyRoomsCircle,
} from './ScreenComponents/Dashboard';

// Arrivals
import { StatusCarousel, DayCarousel } from './ScreenComponents/Arrivals';
// Reservation
import {
  CanceledStatus,
  CheckOutStatus,
  ConfirmedStatus,
  InHouseStatus,
  NoShowStatus,
  BottomLoaderButton,
} from '../components/ScreenComponents/Reservation';

// Stats
import {
  ChannelsDataShow,
  AnnualDataShow,
  StatsSegmentControl,
} from './ScreenComponents/Stats';

export {
  // General
  FadeInView,
  GoBackButton,
  SpaceForScroll,
  NoDataToShow,
  NoFutureDataToShow,
  NoNetwork,
  // Dashboard
  HotelModal,
  HotelNameBar,
  CalendarModal,
  DayPicker,
  PercentageCircle,
  EmptyRoomsCircle,
  // Arrivals
  StatusCarousel,
  DayCarousel,
  // Reservation
  ConfirmedStatus,
  InHouseStatus,
  CanceledStatus,
  NoShowStatus,
  CheckOutStatus,
  LoadingIndicator,
  BottomLoaderButton,
  // Stats
  ChannelsDataShow,
  AnnualDataShow,
  StatsSegmentControl,
};
