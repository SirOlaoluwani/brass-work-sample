import React, { useEffect, useState } from "react";

// Third-party
import { ItemType, ValueType } from "react-native-dropdown-picker";

// Hooks
import useLazyQuery from "src/hooks/useLazyQuery";

// Services
import * as BankAPI from "src/services/BankService";
import * as PaymentAPI from "src/services/PaymentService";

// Component
import PaymentForm from "./PaymentForm";

//Context
import { CreatePaymentContext } from "./context";

// Types
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/navigation";
import { Bank, BankAccountDetails, BankServerData } from "src/types/banks";
import { isEmpty } from "lodash";
import { useBanks } from "src/hooks/useBanks";
import { useMutation } from "react-query";
import { Alert } from "react-native";

type CreatePaymentProps = NativeStackScreenProps<
  RootStackParamList,
  "CreatePayment"
>;

const CreatePayment = (props: CreatePaymentProps) => {
  const [banks, setBanks] = useState<Array<ItemType>>([]);
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [bank, setBank] = useState<ValueType | null>(null);
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const [description, setDescription] = useState("");

  const bankQuery = useBanks();

  const { mutate: loadBankDetails, isLoading: loadingBankDetails } =
    useMutation(BankAPI.verifyAccountNumber, {
      onSuccess: (data) => {
        const accountDetails = data?.data as BankAccountDetails;
        setAccountName(accountDetails?.account_name);
      },
      onError: (error: any) => {
        Alert.alert("Failed to fetch bank details", error?.message);
      },
    });

  const { mutate: sendFunds, isLoading: sendingFunds } = useMutation(
    PaymentAPI.initiateTransfer,
    {
      onSuccess: (data) => {
        Alert.alert("Success", data?.message);
        props.navigation.navigate("Transfers");
      },
      onError: (error: any) => {
        Alert.alert(
          "Fund transfer failed",
          error?.response?.message ?? error?.message
        );
      },
    }
  );

  useEffect(() => {
    if (bankQuery?.data) {
      const bankQueryData = bankQuery?.data?.data as Array<Bank>;
      const bankDropDownPickerOptions: Array<ItemType> = bankQueryData?.map(
        (bank: Bank) => ({
          label: bank.name,
          value: bank.code,
        })
      );
      setBanks(bankDropDownPickerOptions);
    }
  }, [bankQuery?.data]);

  useEffect(() => {
    if (
      !isEmpty(accountNumber) &&
      accountNumber.length === 10 &&
      isEmpty(bank)
    ) {
      Alert.alert("Error", "Kindly select a bank");
      return;
    }

    if (
      !isEmpty(accountNumber) &&
      accountNumber.length === 10 &&
      !isEmpty(bank)
    ) {
      loadBankDetails({
        account_number: accountNumber,
        bank_code: bank as string,
      });
    }
  }, [accountNumber, bank]);

  useEffect(() => {
    if (!isEmpty(amount)) {
      const timeout = setTimeout(() => {
        if (+amount < 100) {
          setAmountError("Amount must be greater than 100");
        }
        if (+amount > 10000000) {
          setAmountError("Amount must be less than 10,000,00");
        }
        if (+amount >= 100 && +amount <= 10000000) {
          setAmountError("");
        }
        clearTimeout(timeout);
      }, 500);
    }
  }, [amount]);

  const disablePayButton: () => boolean = () => {
    return (
      isEmpty(bank) ||
      isEmpty(accountNumber) ||
      isEmpty(accountName) ||
      !isEmpty(amountError) ||
      isEmpty(amount) ||
      isEmpty(description)
    );
  };

  const handleSendFunds = () => {
    sendFunds({
      name: accountName,
      account_number: accountNumber,
      bank_code: bank as string,
      amount,
      description,
    });
  };

  return (
    <CreatePaymentContext.Provider
      value={{
        banks,
        isFetchingBanks: bankQuery.isFetching,
        accountNumber,
        setAccountNumber,
        bank,
        setBank,
        accountName,
        loadingBankDetails,
        disablePayButton: disablePayButton(),
        amount,
        setAmount,
        amountError,
        sendingFunds,
        handleSendFunds,
        description,
        setDescription,
      }}
    >
      <PaymentForm />
    </CreatePaymentContext.Provider>
  );
};

export default CreatePayment;
