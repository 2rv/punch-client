import { PAYMENT_DATA } from '../constants/fields';
import { getDateTime } from './index';

export const performPaymentItemData = (raw) => ({
  id: raw[PAYMENT_DATA.ID],
  amount: raw[PAYMENT_DATA.AMOUNT],
  transaction: raw[PAYMENT_DATA.TRANSACTION],
  confirm: raw[PAYMENT_DATA.CONFIRM],
  createDate: getDateTime(raw[PAYMENT_DATA.CREATE_DATE]),
});

export const performPaymentListData = (rawArr) => rawArr.map((raw) => performPaymentItemData(raw));
