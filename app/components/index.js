// General components
import LoadingIndicator from './Loaders/LoadingIndicator';
import SpaceForScroll from './SpaceForScroll';
import FadeInView from './FadeInView';
import GoBackButton from './Buttons/GoBackButton';
import CalendarModal from './CalendarModal';
import MonthRangeCalendar from './MonthRangeCalendar';
import MonthYearCal from './MonthYearCal';
import MonthYearModal from './MonthYearModal';

import {
  NoDataToShow,
  NoFutureDataToShow,
  NoNetwork,
} from './Alerts/UserAlerts';
// Dashboard
import {
  HotelModal,
  HotelNameBar,
  PercentageCircle,
  EmptyRoomsCircle,
  HorizontalDayPicker,
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
  UniversalModal,
} from '../components/ScreenComponents/Reservation';

// Stats
import {
  ChannelsDataShow,
  AnnualDataShow,
  StatsSegmentControl,
  DotView,
  CollapseButton,
  WaterMarkHider,
  BarChart,
  RevenueDonut,
  StaysDonut,
} from './ScreenComponents/Stats';

export {
  // General
  FadeInView,
  GoBackButton,
  SpaceForScroll,
  NoDataToShow,
  NoFutureDataToShow,
  NoNetwork,
  MonthRangeCalendar,
  MonthYearCal,
  MonthYearModal,
  // Dashboard
  HotelModal,
  HotelNameBar,
  CalendarModal,
  PercentageCircle,
  EmptyRoomsCircle,
  HorizontalDayPicker,
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
  UniversalModal,
  // Stats
  ChannelsDataShow,
  AnnualDataShow,
  StatsSegmentControl,
  DotView,
  CollapseButton,
  WaterMarkHider,
  BarChart,
  RevenueDonut,
  StaysDonut,
};
