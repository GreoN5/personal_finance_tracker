import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import { Summary } from "../src/components/common";
import { store } from "../src/store";

test("renders total income", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Summary />
    </Provider>,
  );

  expect(getByText("Summary")).toBeInTheDocument();
  expect(getByText("Total Income")).toBeInTheDocument();
  expect(getByText("5000.00lv")).toBeInTheDocument();
  expect(getByText("Total Expenses")).toBeInTheDocument();
  expect(getByText("200.00lv")).toBeInTheDocument();
  expect(getByText("Balance")).toBeInTheDocument();
  expect(getByText("4800.00lv")).toBeInTheDocument();
});
