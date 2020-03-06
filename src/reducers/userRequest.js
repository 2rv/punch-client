import { USER_REQUEST } from '../actions';
import { getReadyState, getLoadingState, getErrorState } from '../utils/store';
// import { performNewsView } from '../api/newsView';

const initialState = {
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST.LOADING:
      return {
        ...state,
        data: getLoadingState(action.data),
      };

    case USER_REQUEST.SUCCESS:
      return {
        ...state,
        // data: getReadyState(performNewsView(action.data)),
        data: getReadyState(action.data),
      };

    case USER_REQUEST.FAIL:
      return {
        ...state,
        data: getErrorState(action.data),
        errorMessage: action.message,
      };

    default:
      return state;
  }
};
