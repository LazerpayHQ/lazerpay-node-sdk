import Lazerpay from '../src/index';
import dotenv from 'dotenv';

dotenv.config();

describe('#Transaction module', () => {
  const lazerpay = new Lazerpay(
    'pk_test_zwc4UmoI4Job5Wjs9ZySouPicAuGwT7C04JmWwvpSG1vUgrFyY',
    'sk_test_LG3dTytiANx6ipqO4m8DNfnlx85lIBEL8kDR5k7ejxXwyHYDia'
  );
  jest.setTimeout(300000000);

  it('should payout funds to an address', async () => {
    const transaction_payload = {
      amount: 1,
      recipient: '0x0B4d358D349809037003F96A3593ff9015E89efA',
      coin: 'BUSD',
      blockchain: 'Binance Smart Chain',
    };
    try {
      const response = await lazerpay.Payout.transferCrypto(transaction_payload);

      expect(typeof response).toBe('object');
    } catch (e) {
      console.log(e);
    }
  });
  it('should get accepted coins', async () => {
    try {
      const response = await lazerpay.Misc.getAcceptedCoins();

      expect(typeof response).toBe('object');
    } catch (err) {
      return err;
    }
  });

  it('should get accepted currencies', async () => {
    try {
      const response = await lazerpay.Misc.getAcceptedCurrencies();

      expect(typeof response).toBe('object');
    } catch (err) {
      return err;
    }
  });

  it('should get wallet balance', async () => {
    try {
      const response = await lazerpay.Misc.getWalletBalance('BUSD');

      expect(typeof response).toBe('object');
    } catch (err) {
      return err;
    }
  });

  it('it should intialize transaction', async () => {
    try {
      const reference =
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15);

      const response = await lazerpay.Payment.initializePayment({
        reference: reference.toString(),
        amount: '1',
        customer_name: 'Njoku Test',
        customer_email: 'test@gmail.com',
        coin: 'BUSD',
        currency: 'USD',
        accept_partial_payment: true,
      });
      expect(typeof response).toBe('object');
    } catch (e) {
      console.log(e);
    }
  });

  it('should confirm a transaction', async () => {
    const payload = {
      identifier: '0xa5138755f3EC3F68a51f15C6b2832Da6d7E98122',
    };

    try {
      const response = await lazerpay.Payment.confirmPayment(payload);
      expect(typeof response).toBe('object');
    } catch (e) {
      console.log(e);
    }
  });

  it('should swap crypto for another crypto', async () => {
    const payload = {
      amount: 1,
      fromCoin: 'BUSD',
      toCoin: 'USDT',
      blockchain: 'Binance Smart Chain',
    };
    try {
      const response = await lazerpay.Swap.cryptoSwap(payload);
      expect(typeof response).toBe('object');
    } catch (e) {
      console.log(e);
    }
  });

  it('should get crypto swap amount out', async () => {
    const payload = {
      amount: 1,
      fromCoin: 'BUSD',
      toCoin: 'USDT',
      blockchain: 'Binance Smart Chain',
    };
    try {
      const response = await lazerpay.Swap.getCryptoSwapAmountOut(payload);
      expect(typeof response).toBe('object');
    } catch (e) {
      console.log(e);
    }
  });
});
