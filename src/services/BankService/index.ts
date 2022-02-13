import { makeAPICall } from "..";

export const getBanks = async () => {
  const response = await makeAPICall({
    url: `/list-banks`,
    method: "GET",
  });
  return response?.data;
};

export const verifyAccountNumber = async (data: {
  account_number: string;
  bank_code: string;
}) => {
  const response = await makeAPICall({
    url: `/verify-account-number`,
    method: "POST",
    data,
  });
  return response?.data;
};
