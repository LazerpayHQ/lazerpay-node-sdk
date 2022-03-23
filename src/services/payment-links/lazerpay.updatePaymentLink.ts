import { LazerApi, setapiPubKey, setApiSecKey } from '../../utils/api';
import { API_URL_PAYMENT_LINK } from '../../utils/constants';

type PaymentLinkData = {
  identifier: string;
  status: string;
  apiPubKey: string;
  apiSecKey: string;
};

export default async function(args: PaymentLinkData) {
  const { apiPubKey, apiSecKey, identifier, status } = args;

  try {
    await setapiPubKey(apiPubKey);
    await setApiSecKey(apiSecKey);
    const response = await LazerApi.put(
      `${API_URL_PAYMENT_LINK}/${identifier}`,
      { status }
    );

    return response?.data;
  } catch (err) {
    return err;
  }
}
