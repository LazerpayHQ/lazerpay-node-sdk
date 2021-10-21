import * as Types from './utils/types';
import Payment from './services/Pay';

class LazerPay {
  apiKey: string;
  Payment: Payment;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.Payment = new Payment(apiKey);
  }
}

export default LazerPay;
export { Types };
