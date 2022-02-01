export interface TransactionPayloadData {
  reference?: string;
  amount: string;
  customer_name: string;
  customer_email: string;
  coin: string;
  currency: string;
}
export interface ConfirmTransactionPayloadData {
  identifier: string;
}
export interface TransferFundsPayloadData {
  amount: number;
  recipient: string;
  coin: string;
  blockchain: string;
}
