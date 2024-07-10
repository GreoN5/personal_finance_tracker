import { Transaction, TransactionType } from "../src/@types/transactions";
import transactionsReducer, {
  addTransaction,
  deleteTransaction,
  editTransaction,
} from "../src/store/slices/transactionsSlice";

describe("transactions reducer", () => {
  it("should handle adding a transaction", () => {
    const initialState = {
      transactions: [],
      categories: [],
      filterCategory: "",
    };

    const newTransaction: Transaction = {
      id: 1, description: "Salary", amount: 2000, type: TransactionType.income, category: "Income", date: "2024-07-10",
    };

    const newState = transactionsReducer(initialState, addTransaction(newTransaction));

    expect(newState.transactions).toHaveLength(1);
    expect(newState.transactions[0]).toEqual(newTransaction);
  });

  it("should handle editing a transaction", () => {
    const initialState = {
      transactions: [
        {
          id: 1,
          description: "Salary",
          amount: 2000,
          type: TransactionType.income,
          category: "Income",
          date: "2024-07-10",
        },
      ],
      categories: ["Income"],
      filterCategory: "",
    };

    const updatedTransaction: Transaction = {
      id: 1,
      description: "Updated Salary",
      amount: 2500,
      type: TransactionType.income,
      category: "Income",
      date: "2024-07-11",
    };

    const newState = transactionsReducer(initialState, editTransaction(updatedTransaction));

    expect(newState.transactions).toHaveLength(1);
    expect(newState.transactions[0].description).toBe("Updated Salary");
    expect(newState.transactions[0].amount).toBe(2500);
    expect(newState.transactions[0].date).toBe("2024-07-11");
  });

  it("should handle deleting a transaction", () => {
    const initialState = {
      transactions: [
        {
          id: 1,
          description: "Salary",
          amount: 2000,
          type: TransactionType.income,
          category: "Income",
          date: "2024-07-10",
        },
        {
          id: 2,
          description: "Rent",
          amount: 1000,
          type: TransactionType.expense,
          category: "Housing",
          date: "2024-07-10",
        },
      ],
      categories: ["Income", "Housing"],
      filterCategory: "",
    };

    const newState = transactionsReducer(initialState, deleteTransaction(2));

    expect(newState.transactions).toHaveLength(1);
    expect(newState.transactions[0].id).toBe(1);
  });
});
