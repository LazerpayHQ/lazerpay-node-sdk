import { LazerApi, setApiSecKey } from '../../utils/api';
import { API_URL_PAYMENT_LINK } from '../../utils/constants';

type PaymentLinkData = {
  identifier: string;
  apiSecKey: string;
};

export default async function(args: PaymentLinkData) {
  const { apiSecKey, identifier } = args;

  try {
    await setApiSecKey(apiSecKey);
    const response = await LazerApi.get(
      `${API_URL_PAYMENT_LINK}/${identifier}`
    );

    return response?.data;
  } catch (err) {
    return err;
  }
}
