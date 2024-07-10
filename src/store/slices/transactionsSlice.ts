import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Transaction, TransactionAddEditType, TransactionType } from "../../@types/transactions";
import { categories, transactions } from "../../mock/mockData";

export interface TransactionsState {
  transactions: Transaction[];
  categories: string[];
  filterCategory: string;
}

const initialState: TransactionsState = {
  transactions,
  categories: categories,
  filterCategory: "",
};

export const defaultTransactionData: TransactionAddEditType = {
  description: "",
  amount: 0,
  type: TransactionType.income,
  category: "",
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
    },
    editTransaction(state, action: PayloadAction<Transaction>) {
      const index = state.transactions.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.transactions[index] = action.payload;
      }
    },
    deleteTransaction(state, action: PayloadAction<number>) {
      state.transactions = state.transactions.filter(t => t.id !== action.payload);
    },
    setFilterCategory(state, action: PayloadAction<string>) {
      state.filterCategory = action.payload;
    },
  },
});

export const { addTransaction, editTransaction, deleteTransaction, setFilterCategory } = transactionsSlice.actions;
export default transactionsSlice.reducer;
