import React from "react";

import { ListRenderItemInfo, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../components/Buttons/HeaderButton";
import TodoItem from "../components/ListItems/TodoItem";
import { SeparatorStyle } from "../shared/Styles";
import EmptyState from "../components/EmptyList";

const TodoScreen = props => {
  const todoListId = props.navigation.getParam("todoListId") || -1;
  const todoList =
    useSelector(state =>
      state.todoLists.find(todoList => todoList.id === todoListId)
    ) || {};
  console.log(todoList);
  return (
    <FlatList
      keyExtractor={(todoId: string) => todoId}
      data={todoList.todosIds}
      contentContainerStyle={{ flex: 1 }}
      renderItem={(item: ListRenderItemInfo<string>) => {
        return <TodoItem id={item.item} />;
      }}
      ItemSeparatorComponent={() => <View style={SeparatorStyle} />}
      ListEmptyComponent={
        <EmptyState message={"This list is empty, try adding a task."} />
      }
    />
  );
};

TodoScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: `${navigation.getParam("title", "Unnamed")}`,
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Add"
        iconName="md-create"
        onPress={() => {
          navigation.navigate("EditTodoScreen", {
            todoListId: navigation.getParam("todoListId"),
            title: navigation.getParam("title")
          });
        }}
      />
    </HeaderButtons>
  )
});

export default TodoScreen;
