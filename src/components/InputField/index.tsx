import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

const InputField = (props: TextInputProps) => {
  return <TextInput style={styles.container} {...props} />;
};

export default InputField;
