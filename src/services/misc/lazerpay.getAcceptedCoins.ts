import { LazerApi, setapiPubKey } from '../../utils/api';
import { API_URL_GET_ACCEPTED_COINS } from '../../utils/constants';

type TransactionData = {
  apiPubKey: string;
};

export default async function(args: TransactionData) {
  const { apiPubKey } = args;

  try {
    await setapiPubKey(apiPubKey);
    const response = await LazerApi.get(API_URL_GET_ACCEPTED_COINS);

    return response?.data;
  } catch (err) {
    throw err;
  }
}
