import { PAYMENT_DATA } from '../constants/fields';

export const convertPaymentOrderData = ({ id }) => ({
  [PAYMENT_DATA.ID]: id,
});
