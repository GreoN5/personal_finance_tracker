import React, { FormEvent, useEffect, useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  useToast,
  VStack,
} from "@chakra-ui/react";

import { Transaction, TransactionAddEditType, TransactionType } from "../../../@types/transactions";
import { categories } from "../../../mock/mockData";
import { useAppDispatch } from "../../../store/hooks";
import { defaultTransactionData, editTransaction } from "../../../store/slices/transactionsSlice";

interface TransactionFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  transaction?: Transaction | null;
}

const EditTransactionFormModal: React.FC<TransactionFormModalProps> = ({ isOpen, onClose, transaction }) => {
  const dispatch = useAppDispatch();

  const [transactionData, setTransactionData] = useState<TransactionAddEditType>(defaultTransactionData);

  const toast = useToast();

  useEffect(() => {
    if (transaction) {
      setTransactionData(transaction);
    }
  }, [transaction]);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (transaction) {
      dispatch(editTransaction({
        id: transaction.id,
        ...transactionData,
        amount: transactionData.type === TransactionType.income ? transactionData.amount : -transactionData.amount,
      }));

      onClose();

      toast({
        title: "Transaction updated.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit transaction</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl id="description" isRequired>
                <FormLabel>Description</FormLabel>
                <Input
                  type="text"
                  value={transactionData.description}
                  onChange={(e) =>
                    setTransactionData((prevState) => ({
                      ...prevState,
                      description: e.target.value,
                    }))}
                />
              </FormControl>
              <FormControl id="amount" isRequired>
                <FormLabel>Amount</FormLabel>
                <NumberInput
                  value={transactionData.amount}
                  onChange={(e) =>
                    setTransactionData((prevState) => ({
                        ...prevState,
                        amount: parseInt(e) || 0,
                      }
                    ))}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl id="type" isRequired>
                <FormLabel>Type</FormLabel>
                <Select
                  value={transactionData.type}
                  onChange={(e) =>
                    setTransactionData((prevState) => ({
                      ...prevState,
                      type: e.target.value as TransactionType,
                    }))}
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </Select>
              </FormControl>
              <FormControl id="category" isRequired>
                <FormLabel>Category</FormLabel>
                <Select
                  value={transactionData.category}
                  onChange={(e) =>
                    setTransactionData((prevState) => ({
                      ...prevState,
                      category: e.target.value,
                    }))}
                >
                  <option value="">Choose category</option>
                  {categories.map((category, index) => (
                    <option key={`${category}-${index}`} value={category}>{category}</option>
                  ))}
                </Select>
              </FormControl>
              <Flex width="100%" justifyContent="space-between">
                <Button type="submit" variant="primary">
                  Update transaction
                </Button>
              </Flex>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditTransactionFormModal;
