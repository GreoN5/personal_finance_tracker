import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./components/layout/Main";
import Dashboard from "./pages/dashboard";
import Transactions from "./pages/transactions";

const App: FC = () => {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main>
            <Dashboard />
          </Main>
        }
      />
      <Route
        path="/transactions"
        element={
          <Main>
            <Transactions />
          </Main>
        }
      />
    </Routes>
  );
};

export default App;
