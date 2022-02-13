import { useInfiniteQuery, useQuery } from "react-query";
import * as PaymentAPI from "src/services/PaymentService";
import { TransferServerData } from "src/types/transfers";

type useTransfersProps = {
  recent?: boolean;
};

export const useTransfers = (props: useTransfersProps) => {
  return useInfiniteQuery<TransferServerData, Error>(
    !props.recent ? "transfers" : "recent_transfers",
    PaymentAPI.fetchTransfers,
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.meta.pageCount > lastPage.meta.page) {
          return lastPage.meta.page + 1;
        }
        return undefined;
      },
    }
  );
};
