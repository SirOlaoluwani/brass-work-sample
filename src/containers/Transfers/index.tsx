import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";

// React Native
import { SafeAreaView, View } from "react-native";

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
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => <HeaderBackButton onPress={onBackButtonPress} />,
    });
  }, []);

  const onBackButtonPress = () => {
    props.navigation.navigate("Home");
  };

  const renderTransactionHeader = () => {
    return <InputField placeholder="Search reference..." />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TransfersList ListHeaderComponent={renderTransactionHeader} />
      </View>
    </SafeAreaView>
  );
};

export default Transfers;
