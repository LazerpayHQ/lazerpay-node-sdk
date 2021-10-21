import { LazerApi, setApiKey } from '../../utils/api';
import { API_URL_INIT_TRANSACTION } from '../../utils/constants';

type TransactionData = {
  amount: string;
  customer_name: string;
  customer_email: string;
  coin: string;
  apiKey: string;
};

export default async function(args: TransactionData) {
  const { amount, coin, customer_name, customer_email, apiKey } = args;

  console.log(args, 'ARGUMENTS');

  try {
    await setApiKey(apiKey);
    const response = await LazerApi.post(API_URL_INIT_TRANSACTION, {
      customer_name,
      customer_email,
      coin,
      amount,
    });

    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
