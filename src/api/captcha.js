import { CAPTCHA } from '../constants/fields';

export const performCaptchaData = (raw) => ({
  id: raw[CAPTCHA.ID],
  image: raw[CAPTCHA.DATA],
});
