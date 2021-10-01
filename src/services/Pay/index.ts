import { Payload } from '../../utils/types';
import initializePayment from './lazerpay.initTransaction';

export default class Pay {
  apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Initialize a transaction
   * @param payload
   */
  async initializePayment(args: Payload): Promise<any> {
    return await initializePayment({ ...args, apiKey: this.apiKey });
  }
}
