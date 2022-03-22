import LazerPay from '../src/index';
import dotenv from 'dotenv';

dotenv.config();

describe('#Transaction module', () => {
  //const waitTime = (minutes: number) =>
  //new Promise(resolve => setTimeout(resolve, minutes * 60 * 1000));
  //const api_key = process.env.LAZER_API_KEY;
  const lazer = new LazerPay(
    'pk_test_8RIEnaxgGIwVaXy3k10YpRRHydD9QLFZMvOc6yn5kd6O3u09Tu',
    'SK_TEST'
  );
  jest.setTimeout(300000000);

  //let address: string;

  it('should payout funds to an address', async () => {
    const transaction_payload = {
      amount: 1,
      recipient: '0x0B4d358D349809037003F96A3593ff9015E89efA',
      coin: 'BUSD',
      blockchain: 'Binance Smart Chain',
    };
    try {
      const response = await lazer.Payout.transferCrypto(transaction_payload);
      console.log(response.error);
      //expect(response.status).toBe('success');
    } catch (e) {
      console.log(e);
    }
  });
  it('should get accepted coins', async () => {
    try {
      const response = await lazer.Misc.getAcceptedCoins();
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
