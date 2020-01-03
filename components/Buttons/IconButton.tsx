import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../shared/Colors";

const BUTTON_SIZE = 32;
const ICON_SIZE = 24;

const IconButton = props => {
  return (
    <Ionicons.Button
      name={props.name}
      size={ICON_SIZE}
      color={props.color || Colors.accent}
      style={styles.button}
      iconStyle={{ marginRight: 0 }}
      backgroundColor={"transparent"}
      underlayColor={Colors.veryLightGrey}
      borderRadius={BUTTON_SIZE / 2}
      onPress={props.onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    alignItems: "center",
    justifyContent: "center",
    padding: 0
  }
});

export default IconButton;
