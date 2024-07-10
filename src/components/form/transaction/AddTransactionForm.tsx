import React, { FormEvent, JSX, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";

import { Transaction, TransactionAddEditType, TransactionType } from "../../../@types/transactions";
import { categories } from "../../../mock/mockData";
import { RootState } from "../../../store";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addTransaction, defaultTransactionData } from "../../../store/slices/transactionsSlice";

const AddTransactionForm = (): JSX.Element => {
  const lastTransactionId = useAppSelector((state: RootState) => state.transactions.transactions[state.transactions.transactions.length - 1]?.id ?? 0);
  const dispatch = useAppDispatch();

  const [newTransactionData, setNewTransactionData] = useState<TransactionAddEditType>(defaultTransactionData);

  const toast = useToast();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newTransaction: Transaction = {
      id: lastTransactionId + 1,
      ...newTransactionData,
      amount: newTransactionData.type === TransactionType.income ? newTransactionData.amount : -newTransactionData.amount,
      date: new Date().toISOString().split("T")[0],
    };

    dispatch(addTransaction(newTransaction));
    setNewTransactionData(defaultTransactionData);

    toast({
      title: "Transaction added.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={8} bg="white" borderRadius="md" boxShadow="md" mb={8} maxW="600px" mx="auto">
      <form onSubmit={handleSubmit}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              value={newTransactionData.description}
              onChange={(e) =>
                setNewTransactionData((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }))}
            />
          </FormControl>
          <FormControl id="amount" isRequired>
            <FormLabel>Amount</FormLabel>
            <NumberInput
              value={newTransactionData.amount}
              onChange={(e) =>
                setNewTransactionData((prevState) => ({
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
              value={newTransactionData.type}
              onChange={(e) =>
                setNewTransactionData((prevState) => ({
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
              value={newTransactionData.category}
              onChange={(e) =>
                setNewTransactionData((prevState) => ({
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
        </SimpleGrid>
        <Button type="submit" variant="primary" width="full" mt={4}>
          Add Transaction
        </Button>
      </form>
    </Box>
  );
};

export default AddTransactionForm;
