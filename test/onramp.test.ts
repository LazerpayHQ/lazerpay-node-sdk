import Lazerpay from '../src/index';

describe('Lazerpay Onramp', () => {
  const lazer = new Lazerpay(
    'pk_test_zwc4UmoI4Job5Wjs9ZySouPicAuGwT7C04JmWwvpSG1vUgrFyY',
    'sk_test_LG3dTytiANx6ipqO4m8DNfnlx85lIBEL8kDR5k7ejxXwyHYDia'
  );

  let accountId = '';

  it('should get onramp rate', async () => {
    const response = await lazer.Onramp.getOnrampRate({
      currency: 'USD',
    });
    expect(typeof response).toBe('object');
  });

  it('should get onramp accounts', async () => {
    const response = await lazer.Onramp.getOnrampAccounts();

    accountId = response.data[0].id;
    expect(typeof response).toBe('object');
  });

  it('should initiate onramp', async () => {
    // generate a unique reference
    const reference =
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);

    const response = await lazer.Onramp.initiateOnramp({
      amount: 10000,
      currency: 'NGN',
      accountId,
      reference: reference.toString(),
      coin: 'USDT',
    });
    expect(typeof response).toBe('object');
  });
});
