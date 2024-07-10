import React, { FC, useState } from "react";
import { Button, Flex, ListItem, Text, useToast } from "@chakra-ui/react";

import { Transaction } from "../../@types/transactions";
import { useAppDispatch } from "../../store/hooks";
import { deleteTransaction } from "../../store/slices/transactionsSlice";
import { EditTransactionFormModal } from "../form/transaction";
import { TransactionDetailsModal } from "../modals";

type Props = {
  transaction: Transaction;
  readonly?: boolean
}

const TransactionItem: FC<Props> = ({ transaction, readonly }) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const handleCloseModals = (): void => {
    setIsDetailModalOpen(false);
    setIsEditModalOpen(false);
  };

  const handleDeleteTransaction = (): void => {
    dispatch(deleteTransaction(transaction.id));

    toast({
      title: "Transaction deleted.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <>
      <ListItem bg="white" p={4} borderRadius="md" boxShadow="sm" _hover={{ bg: "gray.100" }}>
        <Flex justify="space-between" align="center">
          <Text fontWeight="bold">{transaction.description} - {transaction.amount}lv</Text>
          {!readonly ? (
            <Flex>
              <Button size="sm" variant="secondary" onClick={() => setIsDetailModalOpen(true)} mr={2}>
                Details
              </Button>
              <Button size="sm" variant="primary" onClick={() => setIsEditModalOpen(true)} mr={2}>
                Edit
              </Button>
              <Button size="sm" variant="red" onClick={handleDeleteTransaction}>
                Delete
              </Button>
            </Flex>
          ) : null}
        </Flex>
      </ListItem>
      <TransactionDetailsModal
        isOpen={isDetailModalOpen}
        onClose={handleCloseModals}
        transaction={transaction}
      />
      <EditTransactionFormModal
        isOpen={isEditModalOpen}
        onClose={handleCloseModals}
        transaction={transaction}
      />
    </>
  );
};

export default TransactionItem;
