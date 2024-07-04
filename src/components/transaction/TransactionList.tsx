import React, { FC, useState } from "react";
import { Box, Button, List, ListItem, Text } from "@chakra-ui/react";

import { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks";

import { TransactionDetail } from "./";

const TransactionList: FC = () => {
  const transactions = useAppSelector((state: RootState) => state.transactions.transactions);
  const filterCategory = useAppSelector((state: RootState) => state.transactions.filterCategory);
  const [selectedTransaction, setSelectedTransaction] = useState<number | null>(null);

  const filteredTransactions = filterCategory
    ? transactions.filter(transaction => transaction.category === filterCategory)
    : transactions;

  return (
    <Box>
      <List spacing={3}>
        {filteredTransactions.map(transaction => (
          <ListItem key={transaction.id} bg="gray.100" p={3} borderRadius="md">
            <Text>{transaction.description} - ${transaction.amount}</Text>
            <Button mt={2} size="sm" onClick={() => setSelectedTransaction(transaction.id)}>
              Details
            </Button>
            {selectedTransaction === transaction.id && (
              <TransactionDetail transaction={transaction} onClose={() => setSelectedTransaction(null)} />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TransactionList;
