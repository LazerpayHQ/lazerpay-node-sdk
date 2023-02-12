import getAcceptedCoins from './lazerpay.getAcceptedCoins';
import getWalletBalance from './lazerpay.getWalletBalance';
import getCurrencies from './lazerpay.getAcceptedCurrencies';

export default class Misc {
  apiPubKey: string;
  apiSecKey: string;
  constructor(apiPubKey: string, apiSecKey: string) {
    this.apiPubKey = apiPubKey;
    this.apiSecKey = apiSecKey;
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
   * list of currencies
   * @param payload
   */

  async getAcceptedCurrencies(): Promise<any> {
    return await getCurrencies({
      apiPubKey: this.apiPubKey,
    });
  }

  /**
   * Get wallet balance
   * @param payload
   */
  async getWalletBalance(coin: string): Promise<any> {
    return await getWalletBalance({
      apiSecKey: this.apiSecKey,
      coin,
    });
  }
}
