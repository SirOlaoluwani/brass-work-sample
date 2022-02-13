import { TransferServerData } from "src/types/transfers";
import { makeAPICall } from "..";

export const initiateTransfer = async (data: {
  name: string;
  account_number: string;
  bank_code: string;
  amount: string;
  description: string;
}) => {
  const response = await makeAPICall({
    url: `/make-transfer`,
    method: "POST",
    data,
  });
  return response?.data;
};

export const fetchTransfers: ({
  pageParam,
}: {
  pageParam?: number | undefined;
}) => Promise<TransferServerData> = async ({ pageParam = 1 }) => {
  const response = await makeAPICall({
    url: `/list-transfers?perPage=10&page=${pageParam}`,
    method: "GET",
  });
  return response?.data as TransferServerData;
};
