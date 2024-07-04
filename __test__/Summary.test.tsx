import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../src/store";
import { Summary } from "../src/components/common";

test("renders total income", () => {
  render(
    <Provider store={store}>
      <Summary />
    </Provider>,
  );

  const incomeElement = screen.getByText(/Total Income/i);
  expect(incomeElement).toBeInTheDocument();
});
