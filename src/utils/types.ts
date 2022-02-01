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
