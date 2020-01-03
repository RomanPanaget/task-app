import React from "react";
import { View, StyleSheet, FlatList, ListRenderItemInfo } from "react-native";
import { useSelector } from "react-redux";
import { TodoList } from "../models/TodoList";
import TodoListItem from "../components/ListItems/TodoListItem";
import { SeparatorStyle } from "../shared/Styles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/Buttons/HeaderButton";

const TodoListScreen = props => {
  const todoLists = useSelector(state => state.todoLists);
  const todos = useSelector(state => state.todos);
  console.log(todoLists[0].todosIds.map(todoId => todos[todoId]));
  return (
    <FlatList
      keyExtractor={(item: TodoList) => item.id}
      data={todoLists}
      extraData={todos}
      renderItem={(item: ListRenderItemInfo<TodoList>) => (
        <TodoListItem
          title={item.item.title}
          description={item.item.description}
          creationDate={item.item.creationDate}
          todos={item.item.todosIds.map(todoId => todos[todoId])}
          onPress={() => {
            props.navigation.navigate("TodoScreen", {
              todoListId: item.item.id,
              title: item.item.title
            });
          }}
        />
      )}
      ItemSeparatorComponent={() => <View style={SeparatorStyle} />}
    />
  );
};

TodoListScreen.navigationOptions = () => ({
  headerTitle: "Todo Lists",
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Add" iconName="md-add" onPress={() => {}} />
    </HeaderButtons>
  )
});

export default TodoListScreen;

const styles = StyleSheet.create({});
