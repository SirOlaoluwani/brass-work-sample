import * as React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "react-query";

import RootNavigation from "..";

const queryClient = new QueryClient();

describe("Testing react navigation", () => {
  const component = (
    <QueryClientProvider client={queryClient}>
      <RootNavigation />
    </QueryClientProvider>
  );

  test("home page contains the action buttons", async () => {
    const { findByText } = render(component);
    const viewTransaction = await findByText("View Transactions");
    const sendMoney = await findByText("Send Money");

    expect(viewTransaction).toBeTruthy();
    expect(sendMoney).toBeTruthy();
  });

  test("home page contains recent transactions header", async () => {
    const { findByText } = render(component);
    const transactionsHeader = await findByText("Recent Transactions");
    expect(transactionsHeader).toBeTruthy();
  });
});
