export interface TransactionPayloadData {
  reference?: string;
  amount: string;
  customer_name: string;
  customer_email: string;
  coin: string;
  currency: string;
  accept_partial_payment: boolean;
}
export interface ConfirmTransactionPayloadData {
  identifier: string;
}
export interface TransferCryptoPayloadData {
  amount: number;
  recipient: string;
  coin: string;
  blockchain: string;
}
export interface PaymentLinkPayloadData {
  title: string;
  description: string;
  logo?: string;
  redirect_url?: string;
  amount?: string;
  currency?: string;
  type?: string;
}
export interface UpdatePaymentLinkPayloadData {
  status: string;
  identifier: string;
}
