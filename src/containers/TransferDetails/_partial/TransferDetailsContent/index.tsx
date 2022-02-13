import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { HorizontalLine } from "src/components";
import { formatDate } from "src/utils/formatDate";
import { formatNaira } from "src/utils/formatNaira";
import { useTransferDetailsContext } from "../../context";
import { styles } from "./styles";

const TransferDetailsContent = () => {
  const { transferDetails } = useTransferDetailsContext();

  const statusColor = () => {
    switch (transferDetails?.status) {
      case "success":
        return "green";
      case "failed":
        return "red";
      case "pending":
        return "yellow";
      default:
        return "grey";
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View>
              <Text style={styles.amountTitle}>Amount</Text>
              <Text style={styles.amountValue}>
                {formatNaira(`${transferDetails?.amount}`)}
              </Text>
            </View>
            <View
              style={[styles.statusBadge, { backgroundColor: statusColor() }]}
            >
              <Text style={styles.statusBadgeText}>
                {transferDetails?.status}
              </Text>
            </View>
          </View>
          <HorizontalLine />
          <View style={styles.contentCard}>
            <Text style={styles.contentTitle}>Recipient's Name</Text>
            <Text style={styles.contentValue}>
              {transferDetails?.recipient.name}
            </Text>
          </View>
          <View style={styles.contentCard}>
            <Text style={styles.contentTitle}>Recipient's Account Number</Text>
            <Text style={styles.contentValue}>
              {transferDetails?.recipient.details.account_number}
            </Text>
          </View>
          <View style={styles.contentCard}>
            <Text style={styles.contentTitle}>Recipient's Bank</Text>
            <Text style={styles.contentValue}>
              {transferDetails?.recipient.details.bank_name}
            </Text>
          </View>
          <View style={styles.contentCard}>
            <Text style={styles.contentTitle}>Description</Text>
            <Text style={styles.contentValue}>{transferDetails?.reason}</Text>
          </View>
          <View style={styles.contentCard}>
            <Text style={styles.contentTitle}>Date</Text>
            <Text style={styles.contentValue}>
              {formatDate(`${transferDetails?.createdAt}`)}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransferDetailsContent;
