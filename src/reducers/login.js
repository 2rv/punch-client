import { LOGIN } from '../actions';

const initialState = {
  error: null,
  statusError: null,
  loading: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case LOGIN.LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGIN.FAIL:
      return {
        ...state,
        error: true,
        loading: false,
        errorMessage: action.message,
      };

    default:
      return state;
  }
};
