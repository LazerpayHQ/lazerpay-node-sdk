import { LazerApi, setApiSecKey } from '../../utils/api';
import { API_URL_CRYPTO_SWAP } from '../../utils/constants';

type CryptoSwapData = {
  amount: number;
  fromCoin: string;
  toCoin: string;
  blockchain: string;
  apiSecKey: string;
};

export default async function(args: CryptoSwapData) {
  const { amount, fromCoin, toCoin, blockchain, apiSecKey } = args;

  try {
    await setApiSecKey(apiSecKey);
    const response = await LazerApi.post(API_URL_CRYPTO_SWAP, {
      amount,
      fromCoin,
      toCoin,
      blockchain,
    });

    return response?.data;
  } catch (err) {
    return err;
  }
}
