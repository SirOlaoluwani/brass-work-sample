import { useContext, createContext } from "react";
import { Transfer } from "src/types/transfers";

interface TransferDetailsProps {
  transferDetails: Transfer | null;
}

const defaultValue: TransferDetailsProps = {
  transferDetails: null,
};
export const TransferDetailsContext = createContext(defaultValue);
export const useTransferDetailsContext = () =>
  useContext(TransferDetailsContext);
