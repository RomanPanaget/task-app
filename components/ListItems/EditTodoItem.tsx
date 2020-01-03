import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../Buttons/IconButton";
import Colors from "../../shared/Colors";

const EditTodoItem = props => {
  return (
    <View style={styles.row}>
      <Text style={styles.title} numberOfLines={1}>
        {props.title}
      </Text>
      <IconButton
        name="md-remove-circle-outline"
        onPress={props.onRemovePress}
        color={Colors.danger}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    width: "100%",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 8,
    paddingVertical: 6,
    flexDirection: "row"
  },
  title: {
    fontSize: 16,
    flex: 1
  }
});

export default EditTodoItem;
