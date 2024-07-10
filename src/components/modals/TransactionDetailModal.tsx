import React from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

import { Transaction } from "../../@types/transactions";

interface TransactionDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  transaction: Transaction | null;
}

const TransactionDetailsModal: React.FC<TransactionDetailsModalProps> = ({ isOpen, onClose, transaction }) => {
  if (!transaction) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Transaction Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box mb={4}>
            <Text fontWeight="bold">Description:</Text>
            <Text>{transaction.description}</Text>
          </Box>
          <Box mb={4}>
            <Text fontWeight="bold">Amount:</Text>
            <Text>{Math.abs(transaction.amount)}lv</Text>
          </Box>
          <Box mb={4}>
            <Text fontWeight="bold">Type:</Text>
            <Text>{transaction.type}</Text>
          </Box>
          <Box mb={4}>
            <Text fontWeight="bold">Category:</Text>
            <Text>{transaction.category}</Text>
          </Box>
          <Box mb={4}>
            <Text fontWeight="bold">Date:</Text>
            <Text>{transaction.date}</Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button variant="primary" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TransactionDetailsModal;
