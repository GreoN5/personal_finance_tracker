import React, { FC } from "react";
import { Box, List } from "@chakra-ui/react";

import { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks";

import TransactionItem from "./TransactionItem";

type Props = {
  readonly?: boolean;
}

const TransactionList: FC<Props> = ({ readonly }) => {
  const transactions = useAppSelector((state: RootState) => state.transactions.transactions);
  const filterCategory = useAppSelector((state: RootState) => state.transactions.filterCategory);

  const filteredTransactions = filterCategory
    ? transactions.filter(transaction => transaction.category === filterCategory)
    : transactions;

  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <List spacing={3}>
        {filteredTransactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} readonly={readonly} />
        ))}
      </List>
    </Box>
  );
};

export default TransactionList;
