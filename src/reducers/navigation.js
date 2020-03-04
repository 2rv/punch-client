import { NAVIGATION } from '../actions';

const initialState = {
  headerPath: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATION.CHANGE_HEADER:
      return {
        ...state,
        header: action.headerPath,
      };

    default:
      return state;
  }
};
