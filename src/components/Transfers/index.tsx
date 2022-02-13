import React from "react";

// Hooks
import { useTransfers } from "src/hooks/useTransfers";

// Third-party
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useInfiniteQuery } from "react-query";

// Components
import TransfersList from "./TransfersList";

// Context
import { TransfersContext } from "./context";

import * as PaymentAPI from "src/services/PaymentService";

// Type
import { RootStackParamList } from "src/navigation";
import { Transfer, TransferServerData } from "src/types/transfers";

type TransferProps = {
  limit?: number;
  recent?: boolean;
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};

const Transfers = (props: TransferProps) => {
  const transfersQuery = useInfiniteQuery<TransferServerData, Error>(
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

  const { navigate } =
    useNavigation<NavigationProp<RootStackParamList, "Transfers">>();

  const onTransferItemPress = (details: Transfer) => {
    navigate("TransferDetails", { details });
  };

  const loadMore = () => {
    if (transfersQuery.hasNextPage && !props.recent) {
      transfersQuery.fetchNextPage();
    }
  };

  return (
    <TransfersContext.Provider
      value={{
        transfers: transfersQuery.data?.pages?.map((page) => page.data).flat(),
        isLoadingTransfers: transfersQuery.isFetching,
        ListHeaderComponent: props.ListHeaderComponent,
        onTransferItemPress,
        transferQueryStatus: transfersQuery.status,
        transferQueryError: transfersQuery.error,
        transferQueryRefetch: transfersQuery.refetch,
        loadMore,
        isFetchingNextPage: transfersQuery.isFetchingNextPage,
      }}
    >
      <TransfersList />
    </TransfersContext.Provider>
  );
};

export default Transfers;
