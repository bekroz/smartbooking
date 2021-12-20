import RESERVATION from '../types/reservationTypes';

const initialState = {
  refreshing: false,
  reservationData: [],
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
        refreshing: true,
      };
    case RESERVATION.DATA_SUCCESS:
      return {
        ...state,
        refreshing: false,
        reservationData: action.reservationData,
      };
    case RESERVATION.DATA_FAILURE:
      return {
        ...state,
        refreshing: false,
        error: action.error,
      };
    case RESERVATION.NEXT_PAGE_REQUEST:
      return {
        ...state,
        refreshing: true,
        pageIndex: action.pageIndex,
      };
    case RESERVATION.NEXT_PAGE_SUCCESS:
      return {
        ...state,
        refreshing: false,
        reservationData: action.reservationData,
      };
    case RESERVATION.NEXT_PAGE_FAILURE:
      return {
        ...state,
        refreshing: false,
        error: action.error,
      };
    case RESERVATION.LAST_PAGE_REACHED:
      return {
        ...state,
        refreshing: false,
        lastPage: true,
      };
    default:
      return { ...state };
  }
};
export default reservationReducer;
