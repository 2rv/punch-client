import { HISTORY_PAYMENT } from '../actions';
import { getReadyState, getLoadingState, getErrorState } from '../utils/store';
import { performPaymentListData } from '../api/payment';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HISTORY_PAYMENT.LOADING:
      return {
        ...state,
        data: getLoadingState(action.data, []),
      };

    case HISTORY_PAYMENT.SUCCESS:
      return {
        ...state,
        data: getReadyState(performPaymentListData(action.data)),
      };

    case HISTORY_PAYMENT.FAIL:
      return {
        ...state,
        data: getErrorState(action.data, []),
        errorMessage: action.message,
      };

    default:
      return state;
  }
};
