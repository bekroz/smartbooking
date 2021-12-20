import { COMPARISON } from '../types';

const initialState = {
  loading: false,
  comparisonData: {},
  error: '',
};

const comparisonReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPARISON.DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMPARISON.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        comparisonData: action.payload,
      };
    case COMPARISON.DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};
export default comparisonReducer;
