import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "src/navigation";
import { TransferDetailsContext } from "./context";
import TransferDetailsContent from "./_partial/TransferDetailsContent";

type TransferDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "TransferDetails"
>;
const TransferDetails = (props: TransferDetailsScreenProps) => {
  const transferDetails = props.route.params.details;
  return (
    <TransferDetailsContext.Provider
      value={{
        transferDetails,
      }}
    >
      <TransferDetailsContent />
    </TransferDetailsContext.Provider>
  );
};

export default TransferDetails;
