import {
  PaymentLinkPayloadData,
  UpdatePaymentLinkPayloadData,
} from '../../utils/types';
import createPaymentLink from './lazerpay.createPaymentLink';
import getPaymentLinks from './lazerpay.getAllPaymentLinks';
import getPaymentLink from './lazerpay.getPaymentLink';
import updatePaymentLink from './lazerpay.updatePaymentLink';
export default class PaymentLink {
  apiSecKey: string;
  constructor(apiSecKey: string) {
    this.apiSecKey = apiSecKey;
  }

  /**
   * Create a Payment Link
   * @param payload
   */
  async createPaymentLink(args: PaymentLinkPayloadData): Promise<any> {
    return await createPaymentLink({
      ...args,
      apiSecKey: this.apiSecKey,
    });
  }
  /**
   * get all Payment Links
   * @param payload
   */
  async getAllPaymentLinks(): Promise<any> {
    return await getPaymentLinks({
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
      apiSecKey: this.apiSecKey,
    });
  }
  /**
   * get Payment Links
   * @param payload
   */
  async updatePaymentLink(args: UpdatePaymentLinkPayloadData): Promise<any> {
    return await updatePaymentLink({
      ...args,
      apiSecKey: this.apiSecKey,
    });
  }
}
