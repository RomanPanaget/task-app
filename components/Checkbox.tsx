import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Colors from "../shared/Colors";

const SIZE = 24;
const GAP = 2;
const OUTER_BORDER_RADIUS = 6;
const INNER_BORDER_RADIUS = 3;
const BORDER_WIDTH = 2;

const Checkbox = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.default}>
        <View style={props.checked ? styles.checked : {}} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  default: {
    width: SIZE,
    height: SIZE,
    borderRadius: OUTER_BORDER_RADIUS,
    borderColor: Colors.accent,
    borderWidth: BORDER_WIDTH,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  checked: {
    width: SIZE - 2 * GAP - 2 * BORDER_WIDTH,
    height: SIZE - 2 * GAP - 2 * BORDER_WIDTH,
    backgroundColor: Colors.accent,
    borderRadius: INNER_BORDER_RADIUS
  }
});

export default Checkbox;
