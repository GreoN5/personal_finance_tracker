import React, { FC } from "react";

import { Summary } from "../../components/common";
import { AddTransactionForm } from "../../components/form";
import { TransactionList } from "../../components/transaction";

const Dashboard: FC = () => (
  <>
    <Summary />
    <AddTransactionForm />
    <TransactionList readonly />
  </>
);

export default Dashboard;
