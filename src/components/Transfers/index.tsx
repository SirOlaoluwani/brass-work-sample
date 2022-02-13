import React from "react";

// Third-party
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { isEmpty } from "lodash";

// Components
import TransfersList from "./TransfersList";

// Context
import { TransfersContext } from "./context";

// Type
import { RootStackParamList } from "src/navigation";
import { Transfer } from "src/types/transfers";

// Hooks
import { useTransfers } from "src/hooks/useTransfers";

type TransferProps = {
  limit?: number;
  recent?: boolean;
  search?: string;
};

const Transfers = (props: TransferProps) => {
  const transfersQuery = useTransfers({ recent: props.recent });

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

  const getSearchData = (search: string, transfers: Array<Transfer>) => {
    const searchText = search.toLowerCase();
    const newTransfers = transfers.filter((transfer) => {
      return (
        `${transfer.amount}`.includes(searchText) ||
        transfer.reason.toLowerCase().includes(searchText) ||
        transfer.recipient.name.toLowerCase().includes(searchText) ||
        transfer.recipient.details.account_number.includes(searchText) ||
        transfer.status.toLowerCase().includes(searchText)
      );
    });
    return newTransfers;
  };

  const getTransfersData = () => {
    const tranfers = transfersQuery.data?.pages
      ?.map((page) => page.data)
      .flat();

    return !isEmpty(props.search)
      ? getSearchData(props?.search ?? "", tranfers ?? [])
      : tranfers;
  };

  return (
    <TransfersContext.Provider
      value={{
        transfers: getTransfersData(),
        isLoadingTransfers: transfersQuery.isFetching,
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
