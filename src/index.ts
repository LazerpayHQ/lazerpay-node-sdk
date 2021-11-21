import * as Types from './utils/types';
import Payment from './services/Pay';

class LazerPay {
  apiPubKey: string;
  Payment: Payment;

  constructor(apiPubKey: string) {
    this.apiPubKey = apiPubKey;
    this.Payment = new Payment(apiPubKey);
  }
}

export default LazerPay;
export { Types };
