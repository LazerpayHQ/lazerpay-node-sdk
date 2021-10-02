import axios from 'axios';
import { API_URL_CONFIRM_TRANSACTION } from '../../utils/constants';

type TransactionData = {
  address: string;
  apiKey: string;
};

export default async function(args: TransactionData) {
  const { address, apiKey } = args;

  // Request headers payload
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
  };
  try {
    const response = await axios.post(
      API_URL_CONFIRM_TRANSACTION,
      {
        address,
      },
      { headers }
    );

    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
