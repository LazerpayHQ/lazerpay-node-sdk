import {
  GetOnrampRatePayloadData,
  InitiateOnrampPayloadData,
} from '../../utils/types';

import getRate from './lazerpay.getRate';
import initiate from './lazerpay.initiate';
import getAccounts from './lazerpay.getAccounts';

export default class Onramp {
  apiSecKey: string;
  constructor(apiSecKey: string) {
    this.apiSecKey = apiSecKey;
  }

  /**
   * Get onramp rate
   * @param payload
   * @returns
   */

  async getOnrampRate(args: GetOnrampRatePayloadData): Promise<any> {
    return await getRate({
      ...args,
      apiSecKey: this.apiSecKey,
    });
  }

  /**
   * Get onramp accounts
   * @param payload
   */

  async getOnrampAccounts(): Promise<any> {
    return await getAccounts({
      apiSecKey: this.apiSecKey,
    });
  }

  /**
   * Initiate onramp
   * @param payload
   */

  async initiateOnramp(args: InitiateOnrampPayloadData): Promise<any> {
    return await initiate({
      ...args,
      apiSecKey: this.apiSecKey,
    });
  }
}
