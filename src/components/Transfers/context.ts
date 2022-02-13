import { useContext, createContext } from "react";

// Types
import { Transfer } from "src/types/transfers";

export interface TransfersContextProps {
  transfers?: Array<Transfer>;
  isLoadingTransfers?: boolean;
  onTransferItemPress?: (details: Transfer) => void;
  transferQueryStatus?: "idle" | "error" | "loading" | "success";
  transferQueryError?: Error | null;
  transferQueryRefetch?: () => void;
  loadMore?: () => void;
  isFetchingNextPage?: boolean;
}

export const defaultValue: TransfersContextProps = {
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
