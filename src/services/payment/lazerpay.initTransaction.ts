import { LazerApi, setapiPubKey } from '../../utils/api';
import { API_URL_INIT_TRANSACTION } from '../../utils/constants';

type TransactionData = {
  reference?: string;
  amount: string;
  customer_name: string;
  customer_email: string;
  coin: string;
  currency: string;
  apiPubKey: string;
  accept_partial_payment?: boolean;
  metadata?: object | {};
};

export default async function(args: TransactionData) {
  const {
    reference,
    amount,
    currency,
    customer_name,
    customer_email,
    apiPubKey,
    coin,
    accept_partial_payment,
    metadata,
  } = args;

  try {
    await setapiPubKey(apiPubKey);
    const response = await LazerApi.post(API_URL_INIT_TRANSACTION, {
      reference,
      customer_name,
      customer_email,
      coin,
      currency,
      amount,
      accept_partial_payment,
      metadata,
    });

    return response?.data;
  } catch (err: any) {
    throw err?.response?.data;
  }
}
