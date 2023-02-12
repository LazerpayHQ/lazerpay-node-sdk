import { LazerApi, setapiPubKey } from '../../utils/api';
import { API_URL_GET_ACCEPTED_CURRENCIES } from '../../utils/constants';

type GetAcceptedCurrenciesData = {
  apiPubKey: string;
};

export default async function(args: GetAcceptedCurrenciesData) {
  const { apiPubKey } = args;

  try {
    await setapiPubKey(apiPubKey);
    const response = await LazerApi.get(API_URL_GET_ACCEPTED_CURRENCIES);

    return response?.data;
  } catch (err) {
    throw err;
  }
}
