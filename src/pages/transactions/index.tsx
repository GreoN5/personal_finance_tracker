import React, { FC } from "react";
import { Container } from "@chakra-ui/react";

import { CategoryFilter } from "../../components/filters";
import { TransactionList } from "../../components/transaction";

const Transactions: FC = () => (
  <Container maxW="container.lg" py={4}>
    <CategoryFilter />
    <TransactionList />
  </Container>
);

export default Transactions;
