import React from "react";

// React Native
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  View,
} from "react-native";

//Components
import TransferCard from "../TransferCard";

// Context
import { useTransfersContext } from "../context";

// Types
import { Transfer } from "src/types/transfers";
import { styles } from "./styles";

const TransfersList = () => {
  const {
    ListHeaderComponent,
    transfers,
    onTransferItemPress,
    transferQueryStatus,
    transferQueryError,
    transferQueryRefetch,
    loadMore,
    isFetchingNextPage,
  } = useTransfersContext();

  const renderTransfers = ({
    item,
    index,
  }: {
    item: Transfer;
    index: number;
  }) => {
    return (
      <TransferCard
        onPress={() => onTransferItemPress(item)}
        amount={`${item.amount}`}
        recipientName={item.recipient.name}
        status={item.status}
        date={item.createdAt}
        key={index}
      />
    );
  };

  if (transferQueryStatus === "loading") {
    return <ActivityIndicator animating />;
  }

  if (transferQueryStatus === "error") {
    return (
      <View style={styles.errorContainer}>
        <Text>Error fetching transactions: {transferQueryError?.message}</Text>
        <Text onPress={transferQueryRefetch} style={styles.retryText}>
          Try again
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={transfers}
      renderItem={renderTransfers}
      keyExtractor={(_item, index) => `${index}`}
      ListHeaderComponent={ListHeaderComponent}
      onEndReached={loadMore}
      ListFooterComponent={() => {
        return <ActivityIndicator animating={isFetchingNextPage} />;
      }}
    />
  );
};

export default TransfersList;
