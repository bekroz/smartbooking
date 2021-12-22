import { HOTEL } from '../types';

const initialState = {
  loading: false,
  hotelID: null,
  hotelList: [],
  noHotelFoundModalVisible: false,
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
    case HOTEL.SET_USER_CHOSEN_HOTEL_ID:
      return {
        ...state,
        hotelID: action.payload,
        noHotelFoundModalVisible: false,
      };
    // If hotel is only one on the hotel list, default hotelID will be set to that hotel's ID
    case HOTEL.SET_DEFAULT_HOTEL_ID:
      return {
        ...state,
        hotelID: action.payload,
        noHotelFoundModalVisible: false,
      };
    case HOTEL.NO_HOTEL_FOUND:
      return {
        ...state,
        noHotelFoundModalVisible: true,
      };
    default:
      return { ...state };
  }
};

export default hotelReducer;
