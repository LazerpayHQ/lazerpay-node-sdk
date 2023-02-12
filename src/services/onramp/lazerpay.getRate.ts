import { API_URL_GET_ONRAMP_RATE } from '../../utils/constants';
import { LazerApi, setApiSecKey } from '../../utils/api';

type OnrampData = {
  currency: string;
  apiSecKey: string;
};

export default async function(args: OnrampData) {
  const { currency, apiSecKey } = args;

  try {
    await setApiSecKey(apiSecKey);
    const response = await LazerApi.get(
      `${API_URL_GET_ONRAMP_RATE}/?currency=${currency}`
    );

    return response.data;
  } catch (err) {
    throw err;
  }
}
