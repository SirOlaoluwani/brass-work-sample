import { useContext, createContext } from "react";
import {
  QueryObserverBaseResult,
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  UseQueryResult,
} from "react-query";

// Types
import { Transfer, TransferServerData } from "src/types/transfers";

interface TransfersContextProps {
  transfers?: Array<Transfer>;
  isLoadingTransfers: boolean;
  onTransferItemPress: (details: Transfer) => void;
  transferQueryStatus: "idle" | "error" | "loading" | "success";
  transferQueryError: Error | null;
  transferQueryRefetch: () => void;
  loadMore: () => void;
  isFetchingNextPage: boolean;
}

const defaultValue: TransfersContextProps = {
  transfers: [],
  isLoadingTransfers: false,
  onTransferItemPress: () => {},
  transferQueryStatus: "idle",
  transferQueryError: null,
  transferQueryRefetch: () => {},
  loadMore: () => {},
  isFetchingNextPage: false,
};
export const TransfersContext = createContext(defaultValue);
export const useTransfersContext = () => useContext(TransfersContext);
