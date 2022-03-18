import {
  TransactionPayloadData,
  ConfirmTransactionPayloadData,
} from '../../utils/types';
import initializePayment from './lazerpay.initTransaction';
import confirmPayment from './lazerpay.confirmPayment';
export default class Payment {
  apiPubKey: string;
  apiSecKey: string;
  constructor(apiPubKey: string, apiSecKey: string) {
    this.apiPubKey = apiPubKey;
    this.apiSecKey = apiSecKey;
  }

  /**
   * Initialize a Payment
   * @param payload
   */
  async initializePayment(args: TransactionPayloadData): Promise<any> {
    return await initializePayment({
      ...args,
      apiPubKey: this.apiPubKey,
    });
  }
  /**
   * Confirm a Payment
   * @param payload
   */
  async confirmPayment(args: ConfirmTransactionPayloadData): Promise<any> {
    return await confirmPayment({
      ...args,
      apiPubKey: this.apiPubKey,
    });
  }
}
