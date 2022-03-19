import * as Types from './utils/types';
import Payment from './services/payment';
import PaymentLink from './services/payment-links';
import Payout from './services/transfer';
import Misc from './services/misc';

class Lazerpay {
  apiPubKey: string;
  apiSecKey: string;
  Payment: Payment;
  Payout: Payout;
  PaymentLinks: PaymentLink;
  Misc: Misc;

  /**
   * This is a constructor for creating Lazerpay Instance
   * @param {string} apiPubKey - Your Lazerpay public Key
   * @param {string} apiSecKey -  Your Lazerpay secret Key
   */

  constructor(apiPubKey: string, apiSecKey: string) {
    this.apiPubKey = apiPubKey;
    this.apiSecKey = apiSecKey;
    this.Payment = new Payment(apiPubKey, apiSecKey);
    this.Payout = new Payout(apiPubKey, apiSecKey);
    this.PaymentLinks = new PaymentLink(apiPubKey, apiSecKey);
    this.Misc = new Misc(apiPubKey, apiSecKey);
  }
}

export default Lazerpay;
export { Types };
