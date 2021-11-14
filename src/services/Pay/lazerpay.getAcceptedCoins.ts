import { LazerApi, setApiKey } from '../../utils/api';
import { API_URL_GET_ACCEPTED_COINS } from '../../utils/constants';

type TransactionData = {
  apiKey: string;
};

export default async function(args: TransactionData) {
  const { apiKey } = args;

  try {
    await setApiKey(apiKey);
    const response = await LazerApi.get(API_URL_GET_ACCEPTED_COINS);

    return response?.data;
  } catch (err) {
    return err;
  }
}
