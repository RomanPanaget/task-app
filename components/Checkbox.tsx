import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Colors from "../shared/Colors";
import { Ionicons } from "@expo/vector-icons";

const SIZE = 24;
const SIZE_UNCHECKED = 28;

const Checkbox = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View
        style={{
          width: SIZE,
          height: SIZE,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Ionicons
          name={props.checked ? "ios-checkbox-outline" : "ios-square-outline"}
          size={props.checked ? SIZE : SIZE_UNCHECKED}
          color={Colors.accent}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Checkbox;
