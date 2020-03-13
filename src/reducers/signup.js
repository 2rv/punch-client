import { SIGNUP } from '../actions';

const initialState = {
  error: null,
  statusError: null,
  key: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP.SUCCESS:
      return {
        ...state,
        key: action.key,
      };

    case SIGNUP.FAIL:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };

    default:
      return state;
  }
};
