import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Colors from "../../shared/Colors";
import IconButton from "../Buttons/IconButton";
import { SeparatorShadowStyle } from "../../shared/Styles";

const NewTodoItem = props => {
  const [title, setTitle] = useState("");
  return (
    <View style={{ ...SeparatorShadowStyle, ...styles.row }}>
      <TextInput
        style={styles.title}
        selectTextOnFocus
        placeholder="New todo"
        placeholderTextColor={Colors.lightGrey}
        value={title}
        onChangeText={setTitle}
      />
      <IconButton
        name="md-add-circle-outline"
        onPress={() => {
          props.onAddPress(title);
          setTitle("");
        }}
        color={Colors.success}
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

export default NewTodoItem;
