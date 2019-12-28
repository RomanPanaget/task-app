import React from "react";
import { StyleSheet, View, Text, ListRenderItemInfo } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Todo } from "../models/Todo";
import { SeparatorStyle } from "../shared/Styles";
import TodoItem from "../components/TodoItem";

const TodoScreen = props => {
  const initList: Todo[] = [
    {
      id: "2",
      title: "Hello todo",
      done: false
    }
  ];
  return (
    <FlatList
      keyExtractor={(item: Todo) => item.id}
      data={initList}
      renderItem={(item: ListRenderItemInfo<Todo>) => (
        <TodoItem
          id={item.item.id}
          title={item.item.title}
          checked={item.item.done}
        />
      )}
      ItemSeparatorComponent={() => <View style={SeparatorStyle} />}
    />
  );
};

TodoScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: `${navigation.getParam("title", "Peter")}`
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default TodoScreen;
