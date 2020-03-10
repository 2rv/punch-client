import { LOGIN } from '../actions';

const initialState = {
  error: null,
  statusError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.SUCCESS:
      return {
        ...state,
      };

    case LOGIN.FAIL:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };

    default:
      return state;
  }
};
