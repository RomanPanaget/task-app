import React, { useState } from "react";

import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  Text
} from "react-native";
import { TodoList } from "../models/TodoList";
import Colors from "../shared/Colors";
import TodoListItem from "../components/TodoListItem";
import { SeparatorStyle } from "../shared/Styles";

const TodoListScreen = props => {
  const initList: TodoList[] = [
    {
      id: "1",
      title:
        "A simple todo list A simple todo list A simple todo list A simple todo list A simple todo list A simple todo list",
      description:
        "Hello this is a dummy todo list I use for mocking because I need to test the component",
      creationDate: new Date(),
      todos: [
        {
          id: "2",
          title: "Hello todo",
          done: false
        }
      ]
    },
    {
      id: "2",
      title: "Another todo list !",
      description: "Hello this is a dummy todo list I use for mocking",
      creationDate: new Date(),
      todos: [
        {
          id: "2",
          title: "Hello todo",
          done: false
        }
      ]
    }
  ];
  // const [todosList, setTodosList] = useState(initList);
  return (
    <FlatList
      keyExtractor={(item: TodoList) => item.id}
      data={initList}
      renderItem={(item: ListRenderItemInfo<TodoList>) => (
        <TodoListItem
          title={item.item.title}
          description={item.item.description}
          creationDate={item.item.creationDate}
          todos={item.item.todos}
          onPress={() => {
            props.navigation.navigate("TodoScreen", {
              title: item.item.title
            });
          }}
        />
      )}
      ItemSeparatorComponent={() => <View style={SeparatorStyle} />}
    />
  );
};

export default TodoListScreen;

const styles = StyleSheet.create({});
