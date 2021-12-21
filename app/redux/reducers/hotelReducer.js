import { HOTEL } from '../types';

const initialState = {
  loading: false,
  hotelID: 48,
  hotelList: [],
  error: null,
};

const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOTEL.DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HOTEL.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        hotelList: action.payload,
      };
    case HOTEL.DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case HOTEL.SET_HOTEL_ID:
      return {
        ...state,
        hotelID: action.payload,
      };
    default:
      return { ...state };
  }
};

export default hotelReducer;
