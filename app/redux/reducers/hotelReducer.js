import { HOTEL } from '../types';

const initialState = {
  loading: true,
  hotelList: [],
  hotelID: 48,
  hotelName: null,
  noHotelFoundModalVisible: false,
  chooseHotelModalVisible: false,
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
    case HOTEL.MODAL_TO_CHOOSE_HOTEL_ID:
      return {
        ...state,
        chooseHotelModalVisible: true,
      };
    case HOTEL.SET_USER_CHOSEN_HOTEL_ID:
      return {
        ...state,
        hotelID: action.payload.hotelID,
        hotelName: action.payload.hotelName,
        chooseHotelModalVisible: false,
      };
    // If hotel is only one on the hotel list, default hotelID will be set to that hotel's ID
    case HOTEL.SET_DEFAULT_HOTEL_ID:
      return {
        ...state,
        noHotelFoundModalVisible: false,
        chooseHotelModalVisible: false,
        hotelID: action.payload.hotelID,
        hotelName: action.payload.hotelName,
      };
    case HOTEL.NO_HOTEL_FOUND:
      return {
        ...state,
        noHotelFoundModalVisible: true,
      };
    default:
      return state;
  }
};

export default hotelReducer;
