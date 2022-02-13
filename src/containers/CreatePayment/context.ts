import { useContext, createContext, SetStateAction, Dispatch } from "react";
import { ItemType, ValueType } from "react-native-dropdown-picker";

interface CreatePaymentContextProps {
  banks: Array<ItemType>;
  isFetchingBanks: boolean;
  accountNumber: string;
  setAccountNumber: (accountNumber: string) => void;
  bank: ValueType | null;
  setBank: Dispatch<SetStateAction<ValueType | null>>;
  accountName: string;
  loadingBankDetails: boolean;
  disablePayButton: boolean;
  amount: string;
  setAmount: (amount: string) => void;
  amountError: string;
  description: string;
  setDescription: (description: string) => void;
  sendingFunds: boolean;
  handleSendFunds: () => void;
}

const defaultValue: CreatePaymentContextProps = {
  banks: [],
  isFetchingBanks: false,
  accountNumber: "",
  setAccountNumber: () => {},
  bank: null,
  setBank: () => {},
  accountName: "",
  loadingBankDetails: false,
  disablePayButton: false,
  amount: "",
  setAmount: () => {},
  amountError: "",
  description: "",
  sendingFunds: false,
  handleSendFunds: () => {},
  setDescription: () => {},
};
export const CreatePaymentContext = createContext(defaultValue);
export const useCreatePaymentContext = () => useContext(CreatePaymentContext);
