import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../shared/Colors";

const EmptyState = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 12
      }}
    >
      <Ionicons
        name={"md-checkbox-outline"}
        size={100}
        color={Colors.veryLightGrey}
      />
      <Text style={{ marginVertical: 12, color: Colors.lightGrey }}>
        {props.message || "This screen is empty"}
      </Text>
    </View>
  );
};

export default EmptyState;
