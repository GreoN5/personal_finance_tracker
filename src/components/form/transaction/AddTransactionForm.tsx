import React, { JSX, useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { Transaction, TransactionType } from "../../../@types/transactions";
import { addTransaction } from "../../../store/slices/transactionsSlice";
import { useAppDispatch } from "../../../store/hooks";

const TransactionForm = (): JSX.Element => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<TransactionType>(TransactionType.income);
  const [category, setCategory] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (): void => {
    const newTransaction: Transaction = {
      id: Date.now(),
      description,
      amount,
      type,
      category,
      date: new Date().toISOString().split("T")[0],
    };
    dispatch(addTransaction(newTransaction));
    setDescription("");
    setAmount(0);
    setType(TransactionType.income);
    setCategory("");
  };

  return (
    <Box p={4} bg="gray.100" borderRadius="md">
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input value={description} onChange={(e) => setDescription(e.target.value)} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Amount</FormLabel>
        <Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Type</FormLabel>
        <Select value={type} onChange={(e) => setType(e.target.value as TransactionType)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Select>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Category</FormLabel>
        <Input value={category} onChange={(e) => setCategory(e.target.value)} />
      </FormControl>
      <Button mt={4} colorScheme="teal" onClick={handleSubmit}>Add Transaction</Button>
    </Box>
  );
};

export default TransactionForm;
