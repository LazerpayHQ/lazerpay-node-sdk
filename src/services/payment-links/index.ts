import { PaymentLinkPayloadData } from '../../utils/types';
import createPaymentLink from './lazerpay.createPaymentLink';
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
}
