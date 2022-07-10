import { LazerApi, setApiSecKey } from '../../utils/api';
import { API_URL_GET_WALLET_BALANCE } from '../../utils/constants';

type GetWalletBalanceData = {
  coin: string;
  apiSecKey: string;
};

export default async function(args: GetWalletBalanceData) {
  const { apiSecKey, coin } = args;

  try {
    await setApiSecKey(apiSecKey);
    const response = await LazerApi.get(
      `${API_URL_GET_WALLET_BALANCE}?coin=${coin}`
    );

    return response?.data;
  } catch (err: any) {
    throw err?.response?.data;
  }
}
