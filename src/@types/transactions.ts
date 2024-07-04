export enum TransactionType {
  income = "income",
  expense = "expense"
}

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: TransactionType;
  category: string;
  date: string;
}
