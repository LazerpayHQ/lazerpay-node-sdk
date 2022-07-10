import { LazerApi, setApiSecKey } from '../../utils/api';
import { API_URL_GET_CRYPTO_AMOUNT_OUT } from '../../utils/constants';

type GetCryptoSwapAmountOutData = {
  amount: number;
  fromCoin: string;
  toCoin: string;
  blockchain: string;
  apiSecKey: string;
};

export default async function(args: GetCryptoSwapAmountOutData) {
  const { amount, fromCoin, toCoin, blockchain, apiSecKey } = args;

  try {
    await setApiSecKey(apiSecKey);
    const response = await LazerApi.post(API_URL_GET_CRYPTO_AMOUNT_OUT, {
      amount,
      fromCoin,
      toCoin,
      blockchain,
    });

    return response?.data;
  } catch (err: any) {
    throw err?.response?.data;
  }
}
