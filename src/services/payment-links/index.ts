import { PaymentLinkPayloadData } from '../../utils/types';
import createPaymentLink from './lazerpay.createPaymentLink';
import getPaymentLinks from './lazerpay.getAllPaymentLinks';
import getPaymentLink from './lazerpay.getPaymentLink';
export default class PaymentLink {
  apiPubKey: string;
  apiSecKey: string;
  constructor(apiPubKey: string, apiSecKey: string) {
    this.apiPubKey = apiPubKey;
    this.apiSecKey = apiSecKey;
  }

  /**
   * Create a Payment Link
   * @param payload
   */
  async createPaymentLink(args: PaymentLinkPayloadData): Promise<any> {
    return await createPaymentLink({
      ...args,
      apiPubKey: this.apiPubKey,
      apiSecKey: this.apiSecKey,
    });
  }
  /**
   * get all Payment Links
   * @param payload
   */
  async getAllPaymentLinks(): Promise<any> {
    return await getPaymentLinks({
      apiPubKey: this.apiPubKey,
      apiSecKey: this.apiSecKey,
    });
  }
  /**
   * get Payment Links
   * @param payload
   */
  async getPaymentLink(identifier: string): Promise<any> {
    return await getPaymentLink({
      identifier,
      apiPubKey: this.apiPubKey,
      apiSecKey: this.apiSecKey,
    });
  }
}
