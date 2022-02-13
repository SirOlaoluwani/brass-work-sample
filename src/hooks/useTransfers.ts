import { useQuery } from "react-query";
import * as PaymentAPI from "src/services/PaymentService";
import { TransferServerData } from "src/types/transfers";

export const useTransfers = () => {
  return useQuery<TransferServerData, Error>(
    "transfers",
    PaymentAPI.fetchTransfers
  );
};
