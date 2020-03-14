import { AUTH } from '../actions';

const initialState = {
  token: null,
  logged: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH.SET_DATA:
      return {
        ...state,
        token: action.token,
        logged: action.logged,
      };

    default:
      return state;
  }
};
