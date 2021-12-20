import { HOTEL } from '../types';

const initialState = {
  loading: false,
  hotelID: null,
  hotelList: [],
  error: null
};

const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOTEL.DATA_REQUEST:
      return {
        ...state,
        loading: true,
        hotelID: action.payload,
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
        error: action.payload
      };
    default:
      return { ...state };
  }
};

export default hotelReducer;
