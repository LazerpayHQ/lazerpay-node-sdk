import getAcceptedCoins from './lazerpay.getAcceptedCoins';
export default class Payment {
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
}
