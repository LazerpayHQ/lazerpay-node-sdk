import {
  TransactionPayloadData,
  ConfirmTransactionPayloadData,
} from '../../utils/types';
import initializePayment from './lazerpay.initTransaction';
import confirmPayment from './lazerpay.confirmPayment';
import getAcceptedCoins from './lazerpay.getAcceptedCoins';
export default class Pay {
  apiPubKey: string;

  constructor(apiPubKey: string) {
    this.apiPubKey = apiPubKey;
  }

  /**
   * Initialize a transaction
   * @param payload
   */
  async initializePayment(args: TransactionPayloadData): Promise<any> {
    return await initializePayment({
      ...args,
      apiPubKey: this.apiPubKey,
    });
  }
  /**
   * Initialize a transaction
   * @param payload
   */
  async confirmPayment(args: ConfirmTransactionPayloadData): Promise<any> {
    return await confirmPayment({
      ...args,
      apiPubKey: this.apiPubKey,
    });
  }

  /**
   * list of accepted coins
   * @param payload
   */
  async getAcceptedCoins(): Promise<any> {
    return await getAcceptedCoins({
      apiPubKey: this.apiPubKey,
    });
  }
}
