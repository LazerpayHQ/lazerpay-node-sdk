export interface TransactionPayloadData {
  customer_name: string;
  customer_email: string;
  amount: string;
  coin: string;
}
export interface ConfirmTransactionPayloadData {
  address: string;
}
