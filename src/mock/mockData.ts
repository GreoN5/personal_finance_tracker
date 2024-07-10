import { TransactionType } from "../@types/transactions";

export const transactions = [
  {
    id: 1,
    description: "Salary",
    amount: 5000,
    type: TransactionType.income,
    category: "Salary",
    date: "2023-01-10",
  },
  {
    id: 2,
    description: "Groceries",
    amount: -200,
    type: TransactionType.expense,
    category: "Food",
    date: "2023-01-12",
  },
];


export const categories = [
  "Salary",
  "Food",
  "Eat out",
  "Fuel",
  "Gym",
];
