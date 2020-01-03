import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import Colors from "../../shared/Colors";
import moment from "moment";

const TodoListItem = props => {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View style={styles.row}>
        <View style={styles.titleRow}>
          <Text numberOfLines={1} style={styles.title}>
            {props.title}
          </Text>
          <Text numberOfLines={1} style={styles.date}>
            {moment(props.creationDate).format("DD-MM-YYYY")}
          </Text>
        </View>
        <Text numberOfLines={2} style={styles.description}>
          {props.description}
        </Text>
        <View style={styles.progressContainer}>
          <Text numberOfLines={1} style={styles.progress}>
            Progress:{" "}
            <Text style={styles.progressRatio}>
              {props.todos.filter(todo => todo.done).length}/
              {props.todos.length}
            </Text>
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
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
  titleRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 15,
    color: Colors.accent,
    fontWeight: "bold",
    flex: 1
  },
  date: {
    color: Colors.lightGrey,
    fontSize: 12,
    marginLeft: 6
  },
  description: {
    paddingVertical: 4,
    color: Colors.lightGrey
  },
  progressContainer: {
    alignItems: "flex-end"
  },
  progress: {
    color: Colors.grey,
    fontSize: 12
  },
  progressRatio: {
    color: Colors.accent
  }
});

export default TodoListItem;
