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
      logo: 'https://webhook.site/d1e815d0-0aa4-4bee-aeb5-a5eb0f62701a',
      currency: 'USD',
      type: 'standard',
    };
    try {
      const response = await lazer.PaymentLinks.createPaymentLink(
        transaction_payload
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  });

  // it('should get all payment link', async () => {
  //   try {
  //     const response = await lazer.PaymentLinks.getAllPaymentLinks();
  //     console.log(response);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // });
  it('should get a single payment link', async () => {
    try {
      const identifier = '7f2vrd8n';

      const response = await lazer.PaymentLinks.getPaymentLink(identifier);
      console.log(response, 'single link');
    } catch (e) {
      console.log(e);
    }
  });
});
