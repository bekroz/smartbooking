import { ANNUAL } from '../types';

const initialState = {
  loading: true,
  chosenYear: null,
  annualData: [],
  error: null,
};

const annualReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANNUAL.DATA_REQUEST:
      return {
        ...state,
        loading: true,
        chosenYear: action.payload,
      };
    case ANNUAL.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        annualData: action.payload,
      };
    case ANNUAL.DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default annualReducer;
