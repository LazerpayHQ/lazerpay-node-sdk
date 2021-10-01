export interface TransactionPayloadData {
  customer_name: string;
  customer_email: string;
  amount: number;
}
export interface ConfirmTransactionPayloadData {
  address: string;
}
