import * as Types from './utils/types';
import Payment from './services/payment';

class Lazerpay {
  apiPubKey: string;
  apiSecKey: string;
  Payment: Payment;

  constructor(apiPubKey: string, apiSecKey: string) {
    this.apiPubKey = apiPubKey;
    this.apiSecKey = apiSecKey;
    this.Payment = new Payment(apiPubKey, apiSecKey);
  }
}

export default Lazerpay;
export { Types };
