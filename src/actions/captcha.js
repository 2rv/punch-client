import api from '../utils/request';

import URLS from '../constants/api';
import { CAPTCHA } from '.';

const captchaLoading = () => ({
  type: CAPTCHA.LOADING,
});

const captchaSuccess = (data) => ({
  type: CAPTCHA.SUCCESS,
  data,
});

export const generateCaptcha = () => (dispatch) => {
  dispatch(captchaLoading());

  return api.get(URLS.GENERATE_CAPTCHA).then(({ data }) => {
    return dispatch(captchaSuccess(data));
  });
};
