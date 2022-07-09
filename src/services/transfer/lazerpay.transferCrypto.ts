import { LazerApi, setApiSecKey } from '../../utils/api';
import { API_URL_TRANSFER_FUNDS } from '../../utils/constants';

type TransactionData = {
  amount: number;
  recipient: string;
  coin: string;
  blockchain: string;
  apiSecKey: string;
  metadata?: object | {};
};

export default async function(args: TransactionData) {
  const { amount, recipient, coin, blockchain, apiSecKey, metadata } = args;

  try {
    await setApiSecKey(apiSecKey);
    const response = await LazerApi.post(API_URL_TRANSFER_FUNDS, {
      amount,
      recipient,
      coin,
      blockchain,
      metadata,
    });

    return response?.data;
  } catch (err) {
    return err;
  }
}
