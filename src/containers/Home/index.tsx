import React, { FC } from "react";

// React Native
import { FlatList, SafeAreaView, Text, View } from "react-native";

// Components
import { TouchableCard, Spacer, HorizontalLine } from "src/components";

//Styles
import { styles } from "./styles";

// Props
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/navigation";
import TransactionsList from "src/components/Transfers";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: HomeProps) => {
  const goToTransactions = () => {
    navigation.navigate("Transfers");
  };

  const goToCreateNewTransaction = () => {
    navigation.navigate("CreatePayment");
  };

  const renderRTHeader = () => {
    return (
      <View style={styles.recentTransactionsHeader}>
        <Text style={styles.recentTransactionsHeaderText}>
          Recent Transactions
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome To</Text>
        <Text style={[styles.headerText, styles.headerTextLogo]}>
          SimplePay
        </Text>
        <HorizontalLine />
        <Spacer height={30} />
        <View style={styles.row}>
          <TouchableCard text="View Transactions" onPress={goToTransactions} />
          <TouchableCard
            text="Make Payment"
            onPress={goToCreateNewTransaction}
          />
        </View>
        <Spacer height={30} />
        <TransactionsList ListHeaderComponent={renderRTHeader} recent />
      </View>
    </SafeAreaView>
  );
};

export default Home;
