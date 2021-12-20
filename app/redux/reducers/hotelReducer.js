import { HOTEL } from '../types';

const initialState = {
  loading: false,
  hotelID: null,
  hotelName: null,
  hotelList: [],
  error: null
};

const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOTEL.DATA_REQUEST:
      return {
        ...state,
        loading: true,
        hotelID: action.payload.hotelID,
        hotelName: action.payload.hotelName
      };
    case HOTEL.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        hotelList: action.payload.hotelList,
        hotelID: action.payload.hotelID,
        hotelName: action.payload.hotelName
      };
    case HOTEL.DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return { ...state };
  }
};

export default hotelReducer;
