import * as Types from './utils/types';
import Payment from './services/payment';

class Lazerpay {
  apiPubKey: string;
  apiSecKey: string;
  Payment: Payment;

  /**
   * This is a constructor for creating Lazerpay Instance
   * @param {string} apiPubKey - Your Lazerpay public Key
   * @param {string} apiSecKey -  Your Lazerpay secret Key
   */

  constructor(apiPubKey: string, apiSecKey: string) {
    this.apiPubKey = apiPubKey;
    this.apiSecKey = apiSecKey;
    this.Payment = new Payment(apiPubKey, apiSecKey);
  }
}

export default Lazerpay;
export { Types };
