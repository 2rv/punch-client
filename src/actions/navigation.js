import { NAVIGATION } from '.';

export const headerNavigatePath = (path) => {
  return (dispatch) =>
    dispatch({
      type: NAVIGATION.CHANGE_HEADER,
      headerPath: path,
    });
};
