import { AUTH } from '../actions';

const initialState = {
  auth: null,
  logged: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH.SET_DATA:
      return {
        ...state,
        auth: action.auth,
        logged: action.logged,
      };

    default:
      return state;
  }
};
