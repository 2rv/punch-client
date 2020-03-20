import { HISTORY_RESPONSE } from '../actions';
import { getReadyState, getLoadingState, getErrorState } from '../utils/store';
// import { performNewsView } from '../api/newsView';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HISTORY_RESPONSE.LOADING:
      return {
        ...state,
        data: getLoadingState(action.data, []),
      };

    case HISTORY_RESPONSE.SUCCESS:
      return {
        ...state,
        // data: getReadyState(performNewsView(action.data)),
        data: getReadyState(action.data, []),
      };

    case HISTORY_RESPONSE.FAIL:
      return {
        ...state,
        data: getErrorState(action.data, []),
        errorMessage: action.message,
      };

    default:
      return state;
  }
};
