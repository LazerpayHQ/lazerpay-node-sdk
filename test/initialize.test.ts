import LazerPay from '../src/index';
import dotenv from 'dotenv';

dotenv.config();

describe('#Transaction module', () => {
  const waitTime = (minutes: number) =>
    new Promise(resolve => setTimeout(resolve, minutes * 60 * 1000));
  const api_key = process.env.LAZER_API_KEY;
  const lazer = new LazerPay(api_key);
  jest.setTimeout(300000000);

  let address: string;

  it('should initialize a transaction', async () => {
    const transaction_payload = {
      customer_name: 'Njoku Emmanuel',
      customer_email: 'kalunjoku123@gmail.com',
      amount: '10',
      coin: 'USDC',
    };
    try {
      const response = await lazer.Payment.initializePayment(
        transaction_payload
      );

      address = response.data.address;

      console.log(address, 'generated address');

      expect(response.status).toBe('success');
    } catch (e) {
      console.log(e);
    }
  });
  it('should confirm a transaction', async () => {
    await waitTime(4);

    console.log(address, 'address');
    const payload = {
      address: address,
    };

    try {
      const response = await lazer.Payment.confirmPayment(payload);
      console.log(response, 'from confirming transaction');
    } catch (e) {
      console.log(e);
    }
  });
});
