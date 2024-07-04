import React, { FC } from "react";
import { Container } from "@chakra-ui/react";

import { Summary } from "../../components/common";
import { AddTransactionForm } from "../../components/form";
import { Header } from "../../components/layout";
import { TransactionList } from "../../components/transaction";

const Dashboard: FC = () => (
  <Container maxW="container.lg" py={4}>
    <Header />
    <Summary />
    <AddTransactionForm />
    <TransactionList />
  </Container>
);

export default Dashboard;
