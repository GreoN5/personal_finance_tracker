import React, { FC } from "react";
import { Box, Heading, SimpleGrid, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

import { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks";

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
    <Box bg="white" p={8} borderRadius="md" boxShadow="md" maxW="600px" mx="auto" mb={8}>
      <Heading as="h2" size="lg" mb={4}>Summary</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        <Stat>
          <StatLabel>Total Income</StatLabel>
          <StatNumber>{totalIncome.toFixed(2)}lv</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Total Expenses</StatLabel>
          <StatNumber>{Math.abs(totalExpenses).toFixed(2)}lv</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Balance</StatLabel>
          <StatNumber>{balance.toFixed(2)}lv</StatNumber>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default Summary;
