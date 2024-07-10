import React from "react";
import { Provider } from "react-redux";
import { fireEvent, render, RenderResult } from "@testing-library/react";

import "@testing-library/jest-dom";

import { AddTransactionForm } from "../src/components/form";
import { store } from "../src/store";

const renderComponent = (): RenderResult => (
  render(
    <Provider store={store}>
      <AddTransactionForm />
    </Provider>,
  )
);

test("renders AddTransactionForm component correctly", () => {
  const { getByText } = renderComponent();

  expect(getByText("Description")).toBeInTheDocument();
  expect(getByText("Amount")).toBeInTheDocument();
  expect(getByText("Type")).toBeInTheDocument();
  expect(getByText("Category")).toBeInTheDocument();
});

test("submits form correctly", () => {
  const onCloseMock = jest.fn();
  const { getByText } = renderComponent();

  fireEvent.change(getByText("Description"), { target: { value: "Groceries" } });
  fireEvent.change(getByText("Amount"), { target: { value: "100" } });
  fireEvent.change(getByText("Type"), { target: { value: "expense" } });
  fireEvent.change(getByText("Category"), { target: { value: "Food" } });

  fireEvent.click(getByText("Add Transaction"));

  expect(onCloseMock).toHaveBeenCalled();
  expect(store.getState().transactions.transactions).toHaveLength(1);
  expect(store.getState().transactions.transactions[0].description).toBe("Groceries");
});
