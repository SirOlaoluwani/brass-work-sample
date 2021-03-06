import React, { Suspense } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { formatDate } from "src/utils/formatDate";
import { formatNaira } from "src/utils/formatNaira";
import { styles } from "./styles";

type TransferCardBodyProps = {
  title: string;
  value: string;
  valueIsPill?: string;
};

export type TransferCardProps = {
  amount: string;
  recipientName: string;
  status: string;
  date: string;
  onPress: () => void;
  index: number;
};

export const TransferCardBody = ({ title, value }: TransferCardBodyProps) => {
  return (
    <View style={styles.row}>
      <Text style={styles.rowTitle} testID="card-body-title">
        {title}
      </Text>
      <Text numberOfLines={1} ellipsizeMode="middle" testID="card-body-value">
        {value}
      </Text>
    </View>
  );
};

const TransferCard = (props: TransferCardProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      testID="transferCardId"
    >
      <TransferCardBody title="Amount" value={formatNaira(props.amount)} />
      <TransferCardBody title="Recipient" value={props.recipientName} />
      <TransferCardBody title="Status" value={props.status} />
      <TransferCardBody title="Date" value={formatDate(props.date)} />
    </TouchableOpacity>
  );
};

export default TransferCard;
