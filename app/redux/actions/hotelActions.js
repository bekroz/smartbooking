import { HOTEL } from '../types';
import { getAllHotelPropertiesDataAPI } from '../../api';

const getHotelDataRequestAction = (hotelID) => {
  return {
    type: HOTEL.DATA_REQUEST,
  };
};

const getHotelDataSuccessAction = (hotelList) => {
  return {
    type: HOTEL.DATA_SUCCESS,
    payload: hotelList
  };
};

const getHotelDataFailureAction = (error) => {
  return {
    type: HOTEL.DATA_FAILURE,
    payload: error
  };
};


async function getHotelData() {
  getHotelDataRequestAction();
try {
  await getAllHotelPropertiesDataAPI(params).then(hotelList => {
    getHotelDataSuccessAction(hotelList);
  });
} catch (error) {
  getHotelDataFailureAction(error);
  console.error(error);
}
}
export default getHotelData;
