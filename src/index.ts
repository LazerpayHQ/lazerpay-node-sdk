import * as Types from './utils/types';
import Payment from './services/Pay';

class LazerPay {
  apiPubKey: string;
  apiSecKey: string;
  Payment: Payment;

  constructor(apiPubKey: string, apiSecKey: string) {
    this.apiPubKey = apiPubKey;
    this.apiSecKey = apiSecKey;
    this.Payment = new Payment(apiPubKey, apiSecKey);
  }
}

export default LazerPay;
export { Types };
