import React, { useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Checkbox from "../Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAction } from "../../redux/TodoActions";

const TodoItem = props => {
  const todo = useSelector(state => state.todos[props.id]);
  const dispatch = useDispatch();
  const toggleTodo = useCallback(() => {
    dispatch(toggleTodoAction({ ...todo, done: !todo.done }));
  }, [dispatch, todo]);
  return (
    <TouchableOpacity onPress={toggleTodo}>
      <View style={styles.row}>
        <Text numberOfLines={1} style={styles.title}>
          {todo.title}
        </Text>
        <Checkbox checked={todo.done} onPress={toggleTodo} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    width: "100%",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 12,
    paddingVertical: 8,
    flexDirection: "row"
  },
  title: {
    fontSize: 16,
    flex: 1
  }
});

export default TodoItem;
