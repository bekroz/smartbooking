import { ARRIVALS } from '../types';

const initialState = {
  initialLoading: true,
  nextPageLoading: false,
  arrivalsData: [],
  arrivalsLength: 0,
  pageIndex: 1,
  isLastPage: false,
  arrivalsType: null,
  noData: false,
  error: null,
};

const arrivalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARRIVALS.DATA_REQUEST:
      return {
        ...initialState,
        arrivalsType: action.payload,
        ...state,
        pageIndex: 1,
        initialLoading: true,
        nextPageLoading: false,
        isLastPage: false,
      };
    case ARRIVALS.DATA_SUCCESS:
      return {
        ...state,
        initialLoading: false,
        arrivalsData: action.payload.arrivalsData,
        pageIndex: action.payload.pageIndex,
        arrivalsLength: action.payload.arrivalsLength,
      };
    case ARRIVALS.DATA_FAILURE:
      return {
        ...state,
        initialLoading: false,
        error: action.payload,
      };
    case ARRIVALS.NEXT_PAGE_REQUEST:
      return {
        ...state,
        initialLoading: false,
        nextPageLoading: true,
      };
    case ARRIVALS.NEXT_PAGE_SUCCESS:
      return {
        ...state,
        nextPageLoading: false,
        arrivalsData: [...state.arrivalsData, ...action.payload.arrivalsData],
        arrivalsLength: action.payload.arrivalsLength,
        pageIndex: action.payload.pageIndex,
      };
    case ARRIVALS.NEXT_PAGE_FAILURE:
      return {
        ...state,
        nextPageLoading: false,
        error: action.payload,
      };
    case ARRIVALS.LAST_PAGE_REACHED:
      return {
        ...state,
        lastPage: true,
      };
    case ARRIVALS.TYPE_CHANGE:
      return {
        ...state,
        arrivalsType: action.payload,
      };
    default:
      return state;
  }
};

export default arrivalsReducer;
