import { Container } from "@chakra-ui/react";
import React, { FC } from "react";
import { CategoryFilter } from "../../components/filters";
import { TransactionList } from "../../components/transaction";
import { Header } from "../../components/layout";

const Transactions: FC = () => (
  <Container maxW="container.lg" py={4}>
    <Header />
    <CategoryFilter />
    <TransactionList />
  </Container>
);

export default Transactions;
