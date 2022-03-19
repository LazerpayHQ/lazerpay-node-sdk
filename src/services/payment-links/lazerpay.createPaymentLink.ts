import { LazerApi, setapiPubKey, setApiSecKey } from '../../utils/api';
import { API_URL_PAYMENT_LINK } from '../../utils/constants';

type PaymentLinkData = {
  title: string;
  description: string;
  logo: string;
  redirect_url?: string;
  amount: string;
  currency: string;
  apiPubKey: string;
  apiSecKey: string;
  type: boolean;
};

export default async function(args: PaymentLinkData) {
  const {
    title,
    description,
    logo,
    redirect_url,
    amount,
    currency,
    apiPubKey,
    apiSecKey,
  } = args;

  try {
    await setapiPubKey(apiPubKey);
    await setApiSecKey(apiSecKey);
    const response = await LazerApi.post(API_URL_PAYMENT_LINK, {
      title,
      description,
      logo,
      redirect_url,
      currency,
      amount,
    });

    return response?.data;
  } catch (err) {
    return err;
  }
}
