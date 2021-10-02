import axios from 'axios';
import { API_URL_INIT_TRANSACTION } from '../../utils/constants';

type TransactionData = {
  amount: number;
  customer_name: string;
  customer_email: string;
  apiKey: string;
};

export default async function(args: TransactionData) {
  const { amount, customer_name, customer_email, apiKey } = args;

  // Request headers payload
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
  };
  try {
    const response = await axios.post(
      API_URL_INIT_TRANSACTION,
      {
        amount,
        customer_name,
        customer_email,
        apiKey,
      },
      { headers }
    );

    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
