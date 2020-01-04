import React from "react";
import { View, Text } from "react-native";

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
      <Text>{props.message || "This screen is empty"}</Text>
    </View>
  );
};

export default EmptyState;
