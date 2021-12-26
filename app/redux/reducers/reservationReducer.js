import { RESERVATION } from '../types';
import {
  RESERVATION_STATUS,
  RESERVATION_TYPE,
} from '../../constants/dataTypes';

const initialState = {
  initialLoading: true,
  nextPageLoading: false,
  reservationData: [],
  reservationLength: 0,
  pageIndex: 1,
  isLastPage: false,
  reservationStatus: RESERVATION_STATUS.confirmed,
  reservationType: RESERVATION_TYPE.checkin,
  noData: false,
  error: null,
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVATION.DATA_REQUEST:
      return {
        ...state,
        initialLoading: true,
        nextPageLoading: false,
      };
    case RESERVATION.DATA_SUCCESS:
      return {
        ...state,
        initialLoading: false,
        reservationData: action.payload.reservationData,
        pageIndex: action.payload.pageIndex,
        reservationLength: action.payload.reservationLength,
      };
    case RESERVATION.DATA_FAILURE:
      return {
        ...state,
        initialLoading: false,
        error: action.payload,
      };
    case RESERVATION.NEXT_PAGE_REQUEST:
      return {
        ...state,
        initialLoading: false,
        nextPageLoading: true,
      };
    case RESERVATION.NEXT_PAGE_SUCCESS:
      return {
        ...state,
        nextPageLoading: false,
        reservationData: [
          ...state.reservationData,
          ...action.payload.reservationData,
        ],
        pageIndex: action.payload.pageIndex,
      };
    case RESERVATION.NEXT_PAGE_FAILURE:
      return {
        ...state,
        nextPageLoading: false,
        error: action.payload,
      };
    case RESERVATION.LAST_PAGE_REACHED:
      return {
        ...state,
        lastPage: true,
      };
    // Reservation search status change
    case RESERVATION.STATUS_CHANGE:
      return {
        ...state,
        reservationStatus: action.payload,
      };
    // Reservation search type change
    case RESERVATION.TYPE_CHANGE:
      return {
        ...state,
        reservationType: action.payload,
      };
    default:
      return state;
  }
};
export default reservationReducer;
