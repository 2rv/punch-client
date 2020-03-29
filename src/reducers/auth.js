import { AUTH } from '../actions';

const initialState = {
  token: null,
  logged: null,
  user: {},
  loading: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH.SET_DATA:
      return {
        ...state,
        token: action.token,
        user: action.user,
        logged: action.logged,
      };

    case AUTH.LOADING:
      return {
        ...state,
        loading: true,
      };

    case AUTH.LOADED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
