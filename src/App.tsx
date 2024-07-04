import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Transactions from "./pages/transactions";

import "./App.css";

const App: FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>
  );
};

export default App;
