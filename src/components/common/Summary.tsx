import React, { FC } from "react";
import { Stat, StatGroup, StatLabel, StatNumber } from "@chakra-ui/react";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";

const Summary: FC = () => {
  const transactions = useAppSelector((state: RootState) => state.transactions.transactions);

  const totalIncome = transactions
    .filter(transaction => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenses = transactions
    .filter(transaction => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = totalIncome + totalExpenses;

  return (
    <StatGroup>
      <Stat>
        <StatLabel>Total Income</StatLabel>
        <StatNumber>${totalIncome}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total Expenses</StatLabel>
        <StatNumber>${totalExpenses}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Balance</StatLabel>
        <StatNumber>${balance}</StatNumber>
      </Stat>
    </StatGroup>
  );
};

export default Summary;
