import { TransferCryptoPayloadData } from '../../utils/types';
import transferCrypto from './lazerpay.cryptoPayout';
export default class Payment {
  apiPubKey: string;
  apiSecKey: string;
  constructor(apiPubKey: string, apiSecKey: string) {
    this.apiPubKey = apiPubKey;
    this.apiSecKey = apiSecKey;
  }

  /**
   * Transfer out tokens to external wallet
   * @param payload
   */
  async transferCrypto(args: TransferCryptoPayloadData): Promise<any> {
    return await transferCrypto({
      ...args,
      apiPubKey: this.apiPubKey,
      apiSecKey: this.apiSecKey,
    });
  }
}
