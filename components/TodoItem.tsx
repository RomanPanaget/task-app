import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import Colors from "../shared/Colors";
import { CheckBox } from "react-native-elements";

const TodoListItem = props => {
  const [checked, setChecked] = useState(props.done);
  return (
    <View style={styles.row}>
      <Text numberOfLines={1} style={styles.title}>
        {props.title}
      </Text>
      <CheckBox
        checked={checked}
        checkedColor={Colors.accent}
        onIconPress={() => setChecked(c => !c)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    width: "100%",
    minHeight: 48,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 6
  },
  title: {
    fontSize: 15,
    color: Colors.accent,
    fontWeight: "bold",
    flex: 1
  }
});

export default TodoListItem;
