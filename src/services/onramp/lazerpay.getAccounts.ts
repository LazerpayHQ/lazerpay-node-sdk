import { API_URL_GET_ONRAMP_ACCOUNTS } from '../../utils/constants';
import { LazerApi, setApiSecKey } from '../../utils/api';

type OnrampData = {
  apiSecKey: string;
};

export default async function(args: OnrampData) {
  const { apiSecKey } = args;

  try {
    await setApiSecKey(apiSecKey);
    const response = await LazerApi.get(API_URL_GET_ONRAMP_ACCOUNTS);

    return response.data;
  } catch (err) {
    throw err;
  }
}
