import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// Third-party
import DropDownPicker, {
  ItemType,
  ValueType,
} from "react-native-dropdown-picker";

// Components
import InputField from "src/components/InputField";
import { styles as InputFieldStyle } from "src/components/InputField/styles";

// Styles
import { styles } from "./styles";

// Types
import { useCreatePaymentContext } from "../context";
import { isEmpty } from "lodash";
import { formatNaira } from "src/utils/formatNaira";

const PaymentForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    banks,
    isFetchingBanks,
    accountNumber,
    setAccountNumber,
    bank,
    setBank,
    accountName,
    loadingBankDetails,
    disablePayButton,
    amount,
    setAmount,
    amountError,
    description,
    setDescription,
    handleSendFunds,
    sendingFunds,
  } = useCreatePaymentContext();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <DropDownPicker
            open={open}
            value={bank}
            items={banks}
            setOpen={setOpen}
            setValue={setBank}
            style={InputFieldStyle.container}
            loading={isFetchingBanks}
            placeholder="Select a bank..."
            searchable
          />
          <InputField
            placeholder="Enter destination account"
            value={accountNumber}
            onChangeText={setAccountNumber}
            keyboardType="number-pad"
            placeholderTextColor="black"
          />
          <InputField
            placeholder={!loadingBankDetails ? "Account Name" : "Fetching..."}
            placeholderTextColor="black"
            value={accountName}
            editable={false}
          />
          <InputField
            placeholder="Enter amount"
            placeholderTextColor="black"
            value={amount}
            onChangeText={setAmount}
            keyboardType="number-pad"
            maxLength={8}
          />
          {!isEmpty(amountError) && (
            <Text style={styles.inputError}>{amountError}</Text>
          )}
          <InputField
            placeholder="Enter description"
            placeholderTextColor="black"
            value={description}
            onChangeText={setDescription}
            maxLength={50}
          />
          <TouchableOpacity
            style={[styles.button, disablePayButton && styles.disabledButton]}
            disabled={disablePayButton}
            onPress={handleSendFunds}
          >
            <Text style={styles.buttonText}>
              SEND {formatNaira(amount)}{" "}
              <ActivityIndicator
                animating={sendingFunds ?? false}
                color="white"
              />
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentForm;
