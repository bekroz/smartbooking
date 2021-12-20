import { getAllHotelPropertiesDataAPI } from '../../api'
import { getHotelDataRequestAction, getHotelDataSuccessAction, getHotelDataFailureAction } from '../actions'

async function getHotelsDataMiddleware(params) {
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

 export { getHotelsDataMiddleware };
