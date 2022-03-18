import {
  TransactionPayloadData,
  ConfirmTransactionPayloadData,
  TransferCryptoPayloadData,
} from '../../utils/types';
import initializePayment from './lazerpay.initTransaction';
import confirmPayment from './lazerpay.confirmPayment';
import transferFunds from './lazerpay.cryptoPayout';
import getAcceptedCoins from './lazerpay.getAcceptedCoins';
export default class Pay {
  apiPubKey: string;
  apiSecKey: string;
  constructor(apiPubKey: string, apiSecKey: string) {
    this.apiPubKey = apiPubKey;
    this.apiSecKey = apiSecKey;
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

  /**
   * Transfer out tokens to external wallet
   * @param payload
   */
  async transferFunds(args: TransferCryptoPayloadData): Promise<any> {
    return await transferFunds({
      ...args,
      apiPubKey: this.apiPubKey,
      apiSecKey: this.apiSecKey,
    });
  }
}
