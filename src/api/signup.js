import { SIGNUP } from '../constants/fields';

export const convertSignupData = ({ captchaId, captchaValue }) => ({
  [SIGNUP.CAPTCHA_ID]: captchaId,
  [SIGNUP.CAPTCHA_VALUE]: captchaValue,
});
