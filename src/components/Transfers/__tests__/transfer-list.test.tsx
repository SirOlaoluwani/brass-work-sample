import { render } from "@testing-library/react-native";
import React from "react";
import { TransfersContext } from "../context";
import fetchMock from "jest-fetch-mock";
import TransfersList from "../TransfersList";

export const mockTransferData = [
  {
    amount: 300,
    createdAt: "2022-02-13T00:33:29.000Z",
    currency: "NGN",
    domain: "test",
    failures: null,
    id: 110374507,
    integration: 154972,
    reason: "This is another test",
    reference: "jkmzpho636",
    source: "balance",
    source_details: null,
    status: "success",
    titan_code: null,
    transfer_code: "TRF_cqedgi3lz4axy7l3",
    transferred_at: null,
    updatedAt: "2022-02-13T00:33:29.000Z",
    recipient: {
      active: true,
      createdAt: "2021-07-12T18:40:21.000Z",
      currency: "NGN",
      description: null,
      domain: "test",
      email: null,
      id: 16031368,
      integration: 154972,
      metadata: null,
      name: "ONAFOWOPEOLAOLUWANI TIOLUWANI",
      recipient_code: "RCP_cep6bjix2iqxnib",
      type: "nuban",
      updatedAt: "2022-02-11T03:31:22.000Z",
      is_deleted: false,
      isDeleted: false,
      details: {
        authorization_code: null,
        account_number: "0138054602",
        account_name: "ONAFOWOPEOLAOLUWANI TIOLUWANI",
        bank_code: "058",
        bank_name: "Guaranty Trust Bank",
      },
    },
    session: {
      provider: null,
      id: null,
    },
    fee_charged: 0,
  },
  {
    amount: 2000,
    createdAt: "2022-02-13T00:25:23.000Z",
    currency: "NGN",
    domain: "test",
    failures: null,
    id: 110373553,
    integration: 154972,
    reason: "This is a test",
    reference: "vlfpiq97hy",
    source: "balance",
    source_details: null,
    status: "success",
    titan_code: null,
    transfer_code: "TRF_fcwujyy7ucbws8l1",
    transferred_at: null,
    updatedAt: "2022-02-13T00:25:23.000Z",
    recipient: {
      active: true,
      createdAt: "2022-02-13T00:20:51.000Z",
      currency: "NGN",
      description: null,
      domain: "test",
      email: null,
      id: 25207495,
      integration: 154972,
      metadata: null,
      name: "OLAOLUWANI TIOLUWANI ONAFOWOPE",
      recipient_code: "RCP_e50enfqxtul1l5f",
      type: "nuban",
      updatedAt: "2022-02-13T00:20:51.000Z",
      is_deleted: false,
      isDeleted: false,
      details: {
        authorization_code: null,
        account_number: "2281525939",
        account_name: "OLAOLUWANI TIOLUWANI ONAFOWOPE",
        bank_code: "057",
        bank_name: "Zenith Bank",
      },
    },
    session: {
      provider: null,
      id: null,
    },
    fee_charged: 0,
  },
  {
    amount: 2000,
    createdAt: "2022-02-13T00:24:18.000Z",
    currency: "NGN",
    domain: "test",
    failures: null,
    id: 110373400,
    integration: 154972,
    reason: "This is a test",
    reference: "wg3tb95gt7",
    source: "balance",
    source_details: null,
    status: "success",
    titan_code: null,
    transfer_code: "TRF_og80tck40g5ak9p8",
    transferred_at: null,
    updatedAt: "2022-02-13T00:24:18.000Z",
    recipient: {
      active: true,
      createdAt: "2022-02-13T00:20:51.000Z",
      currency: "NGN",
      description: null,
      domain: "test",
      email: null,
      id: 25207495,
      integration: 154972,
      metadata: null,
      name: "OLAOLUWANI TIOLUWANI ONAFOWOPE",
      recipient_code: "RCP_e50enfqxtul1l5f",
      type: "nuban",
      updatedAt: "2022-02-13T00:20:51.000Z",
      is_deleted: false,
      isDeleted: false,
      details: {
        authorization_code: null,
        account_number: "2281525939",
        account_name: "OLAOLUWANI TIOLUWANI ONAFOWOPE",
        bank_code: "057",
        bank_name: "Zenith Bank",
      },
    },
    session: {
      provider: null,
      id: null,
    },
    fee_charged: 0,
  },
];

describe("<TransfersList />", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("component renders transfer data", async () => {
    const onTransferItemPress = jest.fn();
    const transferQueryRefetch = jest.fn();
    const loadMore = jest.fn();
    const { getByTestId } = render(
      <TransfersContext.Provider
        value={{
          transfers: mockTransferData,
          isLoadingTransfers: false,
          onTransferItemPress,
          transferQueryStatus: "idle",
          transferQueryError: null,
          transferQueryRefetch,
          loadMore,
          isFetchingNextPage: false,
        }}
      >
        <TransfersList />
      </TransfersContext.Provider>
    );
    expect(getByTestId("transferFlatlistId")).toBeTruthy();
  });
});
