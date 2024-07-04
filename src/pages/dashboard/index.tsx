import { Container } from "@chakra-ui/react";
import React, { FC } from "react";
import { Summary } from "../../components/common";
import { AddTransactionForm } from "../../components/form";
import { TransactionList } from "../../components/transaction";
import { Header } from "../../components/layout";

const Dashboard: FC = () => (
  <Container maxW="container.lg" py={4}>
    <Header />
    <Summary />
    <AddTransactionForm />
    <TransactionList />
  </Container>
);

export default Dashboard;
