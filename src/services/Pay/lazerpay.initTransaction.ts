import { LazerApi, setapiPubKey } from '../../utils/api';
import { API_URL_INIT_TRANSACTION } from '../../utils/constants';

type TransactionData = {
  amount: string;
  customer_name: string;
  customer_email: string;
  coin: string;
  currency: string;
  apiPubKey: string;
};

export default async function(args: TransactionData) {
  const {
    amount,
    currency,
    customer_name,
    customer_email,
    apiPubKey,
    coin,
  } = args;

  try {
    await setapiPubKey(apiPubKey);
    const response = await LazerApi.post(API_URL_INIT_TRANSACTION, {
      customer_name,
      customer_email,
      coin,
      currency,
      amount,
    });

    return response?.data;
  } catch (err) {
    return err;
  }
}
