import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "../../@types/transactions";
import { transactions } from "../../mock/mockData";

export interface TransactionsState {
  transactions: Transaction[];
  filterCategory: string;
}

const initialState: TransactionsState = {
  transactions,
  filterCategory: "",
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
    },
    setFilterCategory(state, action: PayloadAction<string>) {
      state.filterCategory = action.payload;
    },
  },
});

export const { addTransaction, setFilterCategory } = transactionsSlice.actions;
export default transactionsSlice.reducer;
