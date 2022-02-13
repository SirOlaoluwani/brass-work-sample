import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

// Styles
import { styles } from "./styles";

interface CardProps {
  text?: string;
  onPress?: () => void;
}

const TouchableCard = (props: CardProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props?.onPress}
      activeOpacity={0.5}
    >
      {props?.text && <Text style={styles.cardText}>{props?.text}</Text>}
    </TouchableOpacity>
  );
};

export default TouchableCard;
