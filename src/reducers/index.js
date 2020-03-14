import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import navigation from './navigation';
import userRequest from './userRequest';
import login from './login';
import auth from './auth';
import signup from './signup';
import refreshKey from './refreshKey';

export default combineReducers({
  form,
  navigation,
  userRequest,
  login,
  auth,
  signup,
  refreshKey,
});
