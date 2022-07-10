import { LazerApi, setApiSecKey } from '../../utils/api';
import { API_URL_PAYMENT_LINK } from '../../utils/constants';

type PaymentLinkData = {
  identifier: string;
  status: string;
  apiSecKey: string;
};

export default async function(args: PaymentLinkData) {
  const { apiSecKey, identifier, status } = args;

  try {
    await setApiSecKey(apiSecKey);
    const response = await LazerApi.put(
      `${API_URL_PAYMENT_LINK}/${identifier}`,
      { status }
    );

    return response?.data;
  } catch (err: any) {
    throw err?.response?.data;
  }
}
