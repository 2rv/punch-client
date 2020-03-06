import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import navigation from './navigation';
import userRequest from './userRequest';

export default combineReducers({
  form,
  navigation,
  userRequest,
});
