import Lazerpay from '../src/index';
import dotenv from 'dotenv';

dotenv.config();

describe('#Transaction module', () => {
  //const waitTime = (minutes: number) =>
  //new Promise(resolve => setTimeout(resolve, minutes * 60 * 1000));
  //const api_key = process.env.LAZER_API_KEY;
  const lazer = new Lazerpay(
    'pk_test_8RIEnaxgGIwVaXy3k10YpRRHydD9QLFZMvOc6yn5kd6O3u09Tu',
    'sk_test_PRjUsHP9h068M7dAt39FBd9vAcB8V8URfMRLEsschnEI8ThrL3'
  );
  jest.setTimeout(300000000);

  //let address: string;

  it('should create a payment link', async () => {
    const transaction_payload = {
      title: 'Njoku Test',
      description: 'Testing this sdk',
      amount: '100',
      currency: 'NGN',
      type: 'standard',
    };
    try {
      const response = await lazer.PaymentLinks.createPaymentLink(
        transaction_payload
      );
      console.log(response.response.data);
      //expect(response.status).toBe('success');
    } catch (e) {
      console.log(e);
    }
  });
});
