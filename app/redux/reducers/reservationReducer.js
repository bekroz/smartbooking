import { RESERVATION } from '../types';

// const typeStayDates = ['Бронирование', 'Заезд', 'Выезд', 'Проживание'];
// const statuses = [
//   'Подтверждено',
//   'Оплачено',
//   'В номере',
//   'Выехал',
//   'Не заезд',
// ];

const initialState = {
  initialLoading: true,
  chosenReservationDateRange: {},
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
        loading: true,
      };
    case RESERVATION.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        reservationData: action.payload,
      };
    case RESERVATION.DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESERVATION.NEXT_PAGE_REQUEST:
      return {
        ...state,
        loading: true,
        pageIndex: action.payload,
      };
    case RESERVATION.NEXT_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        reservationData: action.payload,
      };
    case RESERVATION.NEXT_PAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESERVATION.LAST_PAGE_REACHED:
      return {
        ...state,
        loading: false,
        lastPage: true,
      };
    default:
      return { ...state };
  }
};
export default reservationReducer;
