import { PAYMENT } from '../actions';
import { getReadyState, getLoadingState, getErrorState } from '../utils/store';
// import { performNewsView } from '../api/newsView';

const initialState = {
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT.LOADING:
      return {
        ...state,
        data: getLoadingState(action.data),
      };

    case PAYMENT.SUCCESS:
      return {
        ...state,
        // data: getReadyState(performNewsView(action.data)),
        data: getReadyState(action.data),
      };

    case PAYMENT.FAIL:
      return {
        ...state,
        data: getErrorState(action.data),
        errorMessage: action.message,
      };

    default:
      return state;
  }
};
