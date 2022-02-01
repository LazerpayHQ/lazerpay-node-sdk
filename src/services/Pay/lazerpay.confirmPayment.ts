import { API_URL_CONFIRM_TRANSACTION } from '../../utils/constants';
import { LazerApi, setapiPubKey } from '../../utils/api';

type TransactionData = {
  identifier: string;
  apiPubKey: string;
};

export default async function(args: TransactionData) {
  const { identifier, apiPubKey } = args;

  try {
    await setapiPubKey(apiPubKey);
    const response = await LazerApi.get(
      `${API_URL_CONFIRM_TRANSACTION}/${identifier}`
    );

    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
