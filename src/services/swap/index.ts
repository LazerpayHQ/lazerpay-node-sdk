import {
  CryptoSwapPayloadData,
  GetCryptoSwapAmountOutPayloadData,
} from '../../utils/types';
import cryptoSwap from './lazerpay.cryptoSwap';
import getCryptoSwapAmountOut from './lazerpay.getCryptoAmountOut';
export default class Swap {
  apiSecKey: string;
  constructor(apiSecKey: string) {
    this.apiSecKey = apiSecKey;
  }

  /**
   * Initialize a swap between two stable coins
   * @param payload
   */
  async cryptoSwap(args: CryptoSwapPayloadData): Promise<any> {
    return await cryptoSwap({
      ...args,
      apiSecKey: this.apiSecKey,
    });
  }

  /**
   * Get coin swap amount out before initiating swap
   * @param payload
   */
  async getCryptoSwapAmountOut(
    args: GetCryptoSwapAmountOutPayloadData
  ): Promise<any> {
    return await getCryptoSwapAmountOut({
      ...args,
      apiSecKey: this.apiSecKey,
    });
  }
}
