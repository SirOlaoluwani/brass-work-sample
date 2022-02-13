import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect, useState } from "react";

// React Native
import { SafeAreaView, Text, View } from "react-native";

// Styles
import { styles } from "./styles";

// Components
import InputField from "src/components/InputField";

// Types
import { RootStackParamList } from "src/navigation";
import TransfersList from "src/components/Transfers";
import { HeaderBackButton } from "@react-navigation/elements";

type TransfersScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Transfers"
>;

const Transfers = (props: TransfersScreenProps) => {
  const [search, setSearch] = useState("");
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => <HeaderBackButton onPress={onBackButtonPress} />,
    });
  }, []);

  const onBackButtonPress = () => {
    props.navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text allowFontScaling style={styles.searchDescription}>
          Search for amount, name, account number, description, and date
        </Text>
        <InputField placeholder="Search..." onChangeText={setSearch} />

        <TransfersList search={search} />
      </View>
    </SafeAreaView>
  );
};

export default Transfers;
