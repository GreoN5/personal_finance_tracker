import { Box, Button, Text } from "@chakra-ui/react";
import { Transaction } from "../../@types/transactions";
import React, { FC } from "react";

interface TransactionDetailsProps {
  transaction: Transaction;
  onClose: () => void;
}

const TransactionDetail: FC<TransactionDetailsProps> = ({ transaction, onClose }) => {
  return (
    <Box mt={4} p={4} bg="white" boxShadow="md" borderRadius="md">
      <Text><strong>Description:</strong> {transaction.description}</Text>
      <Text><strong>Amount:</strong> ${transaction.amount}</Text>
      <Text><strong>Type:</strong> {transaction.type}</Text>
      <Text><strong>Category:</strong> {transaction.category}</Text>
      <Text><strong>Date:</strong> {transaction.date}</Text>
      <Button mt={4} onClick={onClose}>Close</Button>
    </Box>
  );
};

export default TransactionDetail;
