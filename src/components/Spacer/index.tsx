import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface SpacerProps {
  height?: number;
  width?: number;
}
const Spacer = (props: SpacerProps) => {
  return <View style={[styles.container, props]} />;
};

export default Spacer;
