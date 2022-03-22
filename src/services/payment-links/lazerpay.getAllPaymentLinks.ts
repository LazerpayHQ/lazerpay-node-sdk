import { LazerApi, setapiPubKey, setApiSecKey } from '../../utils/api';
import { API_URL_PAYMENT_LINK } from '../../utils/constants';

type PaymentLinkData = {
  apiPubKey: string;
  apiSecKey: string;
};

export default async function(args: PaymentLinkData) {
  const { apiPubKey, apiSecKey } = args;

  try {
    await setapiPubKey(apiPubKey);
    await setApiSecKey(apiSecKey);
    const response = await LazerApi.get(API_URL_PAYMENT_LINK);

    return response?.data;
  } catch (err) {
    return err;
  }
}
