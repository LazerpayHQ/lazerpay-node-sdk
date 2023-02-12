import { API_URL_INITIATE_ONRAMP } from '../../utils/constants';
import { LazerApi, setApiSecKey } from '../../utils/api';

type OnrampData = {
  reference: string;
  accountId: string;
  amount: number;
  currency: string;
  coin: string;
  metadata?: object | {};
  apiSecKey: string;
};

export default async function(args: OnrampData) {
  const {
    reference,
    accountId,
    amount,
    currency,
    coin,
    metadata,
    apiSecKey,
  } = args;

  try {
    await setApiSecKey(apiSecKey);
    const response = await LazerApi.post(API_URL_INITIATE_ONRAMP, {
      reference,
      bank_account_id: accountId,
      amount,
      currency,
      coin,
      metadata,
    });

    return response?.data;
  } catch (err) {
    throw err;
  }
}
