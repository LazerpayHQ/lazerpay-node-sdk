import Lazerpay from '../src/index';
import dotenv from 'dotenv';

dotenv.config();

describe('#Transaction module', () => {
  const lazer = new Lazerpay(
    'pk_test_zwc4UmoI4Job5Wjs9ZySouPicAuGwT7C04JmWwvpSG1vUgrFyY',
    'sk_test_LG3dTytiANx6ipqO4m8DNfnlx85lIBEL8kDR5k7ejxXwyHYDia'
  );
  jest.setTimeout(300000000);

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
      expect(typeof response).toBe('object');
    } catch (e) {
      console.log(e);
    }
  });

  it('should get all payment link', async () => {
    try {
      const response = await lazer.PaymentLinks.getAllPaymentLinks();
      expect(typeof response).toBe('object');
    } catch (e) {
      console.log(e);
    }
  });
  it('should get a single payment link', async () => {
    try {
      const identifier = 'b9diy0ozda';

      const response = await lazer.PaymentLinks.getPaymentLink(identifier);
      expect(typeof response).toBe('object');
    } catch (e) {
      console.log(e);
    }
  });
  it('should update a  payment link', async () => {
    try {
      const transaction_payload = {
        identifier: 'b9diy0ozda',
        status: 'active',
      };

      const response = await lazer.PaymentLinks.updatePaymentLink(
        transaction_payload
      );
      expect(typeof response).toBe('object');
    } catch (e) {
      console.log(e);
    }
  });
});
