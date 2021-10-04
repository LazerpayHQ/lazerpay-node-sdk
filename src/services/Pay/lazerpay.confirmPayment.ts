import { API_URL_CONFIRM_TRANSACTION } from '../../utils/constants';
import { LazerApi, setApiKey } from '../../utils/api';

type TransactionData = {
  address: string;
  apiKey: string;
};

export default async function(args: TransactionData) {
  const { address, apiKey } = args;

  try {
    await setApiKey(apiKey);
    const response = await LazerApi.post(API_URL_CONFIRM_TRANSACTION, {
      address,
    });

    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
