import React from "react";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from "react-native";

export default function Touchable(props: any) {
  return Platform.OS === "android" ? (
    <TouchableNativeFeedback onPress={props.onPress}>
      {props.children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      {props.children}
    </TouchableOpacity>
  );
}
