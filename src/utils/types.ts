export interface TransactionPayloadData {
  amount: string;
  customer_name: string;
  customer_email: string;
  coin: string;
  currency: string;
}
export interface ConfirmTransactionPayloadData {
  address: string;
}
