import LazerPay from '../src/index';
import dotenv from 'dotenv';

dotenv.config();

describe('#Transaction module', () => {
  //const api_key = process.env.LAZER_API_KEY;
  const lazer = new LazerPay(
    'lazerpay_test_90th1EbRMD1leOzotSMmAch0YEatpbBaoZzarWlF7hRiPs1WgB'
  );
  jest.setTimeout(300000000);

  it('should initialize a transaction', async () => {
    const transaction_payload = {
      customer_name: 'Njoku Emmanuel',
      customer_email: 'kalunjoku123@gmail.com',
      amount: '10',
      coin: 'USDT',
    };
    try {
      const response = await lazer.Payment.initializePayment(
        transaction_payload
      );

      console.log(
        response.response.data,
        'response from initializing transactions'
      );
    } catch (e) {
      console.log(e);
    }
  });
});
