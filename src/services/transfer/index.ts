import { TransferCryptoPayloadData } from '../../utils/types';
import transferCrypto from './lazerpay.transferCrypto';
export default class Payout {
  apiSecKey: string;
  constructor(apiSecKey: string) {
    this.apiSecKey = apiSecKey;
  }

  /**
   * Transfer out tokens to external wallet
   * @param payload
   */
  async transferCrypto(args: TransferCryptoPayloadData): Promise<any> {
    return await transferCrypto({
      ...args,
      apiSecKey: this.apiSecKey,
    });
  }
}
