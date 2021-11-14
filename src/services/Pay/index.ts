import {
  TransactionPayloadData,
  ConfirmTransactionPayloadData,
} from '../../utils/types';
import initializePayment from './lazerpay.initTransaction';
import confirmPayment from './lazerpay.confirmPayment';
import getAcceptedCoins from './lazerpay.getAcceptedCoins';
export default class Pay {
  apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Initialize a transaction
   * @param payload
   */
  async initializePayment(args: TransactionPayloadData): Promise<any> {
    return await initializePayment({
      ...args,
      apiKey: this.apiKey,
    });
  }
  /**
   * Initialize a transaction
   * @param payload
   */
  async confirmPayment(args: ConfirmTransactionPayloadData): Promise<any> {
    return await confirmPayment({
      ...args,
      apiKey: this.apiKey,
    });
  }

  /**
   * list of accepted coins
   * @param payload
   */
  async getAcceptedCoins(): Promise<any> {
    return await getAcceptedCoins({
      apiKey: this.apiKey,
    });
  }
}
