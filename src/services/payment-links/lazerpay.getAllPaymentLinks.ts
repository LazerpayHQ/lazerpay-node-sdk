import { LazerApi, setApiSecKey } from '../../utils/api';
import { API_URL_PAYMENT_LINK } from '../../utils/constants';

type PaymentLinkData = {
  apiSecKey: string;
};

export default async function(args: PaymentLinkData) {
  const { apiSecKey } = args;

  try {
    await setApiSecKey(apiSecKey);
    const response = await LazerApi.get(API_URL_PAYMENT_LINK);

    return response?.data;
  } catch (err: any) {
    throw err?.response?.data;
  }
}
