export interface TransactionPayloadData {
  reference?: string;
  amount: string;
  customer_name: string;
  customer_email: string;
  coin: string;
  currency: string;
  accept_partial_payment?: boolean;
  metadata?: object | {};
}
export interface ConfirmTransactionPayloadData {
  identifier: string;
}
export interface TransferCryptoPayloadData {
  amount: number;
  recipient: string;
  coin: string;
  blockchain: string;
  metadata?: object | {};
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

export interface CryptoSwapPayloadData {
  amount: number;
  fromCoin: string;
  toCoin: string;
  blockchain: string;
  metadata?: object | {};
}

export interface GetCryptoSwapAmountOutPayloadData {
  amount: number;
  fromCoin: string;
  toCoin: string;
  blockchain: string;
}
