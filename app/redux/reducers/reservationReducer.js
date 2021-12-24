import { RESERVATION } from '../types';

const initialState = {
  initialLoading: true,
  chosenReservationDateRange: null,
  chosenReservationStatus: '',
  chosenReservationType: '',
  reservationData: [],
  nextPageLoading: false,
  pageIndex: 1,
  lastPage: 1,
  isLastPage: false,
  error: '',
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
        reservationData: action.payload,
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
        pageIndex: action.payload,
      };
    case RESERVATION.NEXT_PAGE_SUCCESS:
      return {
        ...state,
        nextPageLoading: false,
        reservationData: [...state.reservationData, ...action.payload],
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
    default:
      return state;
  }
};
export default reservationReducer;
