import { LazerApi, setApiSecKey } from '../../utils/api';
import { API_URL_PAYMENT_LINK } from '../../utils/constants';

type PaymentLinkData = {
  title: string;
  description: string;
  logo?: string;
  redirect_url?: string;
  amount?: string;
  currency?: string;
  apiSecKey: string;
  type?: string;
};

export default async function(args: PaymentLinkData) {
  const {
    title,
    type,
    description,
    logo,
    redirect_url,
    amount,
    currency,
    apiSecKey,
  } = args;

  try {
    await setApiSecKey(apiSecKey);
    const response = await LazerApi.post(API_URL_PAYMENT_LINK, {
      title,
      type,
      description,
      logo,
      redirect_url,
      currency,
      amount,
    });

    return response?.data;
  } catch (err) {
    throw err;
  }
}
