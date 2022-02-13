import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

// Styles
import { styles } from "./styles";

interface CardProps {
  text?: string;
  onPress?: () => void;
}

interface TouchableCardTextProps {
  text?: string;
}

export const TouchableCardText = (props: TouchableCardTextProps) => {
  return props?.text ? (
    <Text style={styles.cardText}>{props?.text}</Text>
  ) : null;
};

const TouchableCard = (props: CardProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props?.onPress}
      activeOpacity={0.5}
      testID="touchableCardTestId"
    >
      <TouchableCardText text={props?.text} />
    </TouchableOpacity>
  );
};

export default TouchableCard;
