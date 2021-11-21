import LazerPay from '../src/index';
import dotenv from 'dotenv';

dotenv.config();

describe('#Transaction module', () => {
  //const waitTime = (minutes: number) =>
  //new Promise(resolve => setTimeout(resolve, minutes * 60 * 1000));
  //const api_key = process.env.LAZER_API_KEY;
  const lazer = new LazerPay(
    'pk_test_MNO4a4YaBCmp40YbLDM3xedsO5iDeYNyqA936rTQ1vqtzVUXzi'
  );
  jest.setTimeout(300000000);

  //let address: string;

  it('should initialize a transaction', async () => {
    const transaction_payload = {
      customer_name: 'Njoku Emmanuel',
      customer_email: 'kalunjoku123@gmail.com',
      coin: 'DAI',
      currency: 'NGN',
      amount: '56000',
    };
    try {
      const response = await lazer.Payment.initializePayment(
        transaction_payload
      );
      console.log(response?.data);
      expect(response.status).toBe('success');
    } catch (e) {
      console.log(e);
    }
  });
  it('should get accepted coins', async () => {
    try {
      const response = await lazer.Payment.getAcceptedCoins();
      console.log(response);
    } catch (err) {
      return err;
    }
  });
  // it('should confirm a transaction', async () => {
  //   await waitTime(4);

  //   console.log(address, 'address');
  //   const payload = {
  //     address: address,
  //   };

  //   try {
  //     const response = await lazer.Payment.confirmPayment(payload);
  //     console.log(response, 'from confirming transaction');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // });
});
