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
  loading: false,
  chosenReservationDateRange: {},
  chosenReservationStatus: '',
  chosenReservationType: '',
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
        loading: true,
      };
    case RESERVATION.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        reservationData: action.payload.reservationData,
      };
    case RESERVATION.DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case RESERVATION.NEXT_PAGE_REQUEST:
      return {
        ...state,
        loading: true,
        pageIndex: action.payload.pageIndex,
      };
    case RESERVATION.NEXT_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        reservationData: action.payload.reservationData,
      };
    case RESERVATION.NEXT_PAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
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
