import { LOGIN_UPDATE } from '../actions';
import { getReadyState, getLoadingState, getErrorState } from '../utils/store';

const initialState = {
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_UPDATE.LOADING:
      return {
        ...state,
        data: getLoadingState(action.data),
      };

    case LOGIN_UPDATE.SUCCESS:
      return {
        ...state,
        data: getReadyState(action.data),
      };

    case LOGIN_UPDATE.FAIL:
      return {
        ...state,
        data: getErrorState(action.data),
        errorMessage: action.message,
      };

    default:
      return state;
  }
};
