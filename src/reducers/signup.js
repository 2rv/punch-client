import { SIGNUP } from '../actions';

const initialState = {
  error: null,
  statusError: null,
  key: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP.SUCCESS:
      return {
        ...state,
        key: action.key,
        loading: false,
      };

    case SIGNUP.LOADING:
      return {
        ...state,
        loading: true,
      };

    case SIGNUP.FAIL:
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
