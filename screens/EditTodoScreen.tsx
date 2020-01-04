import React, { useCallback, useEffect } from "react";
import { ListRenderItemInfo, View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import EditTodoItem from "../components/ListItems/EditTodoItem";
import { SeparatorStyle, SeparatorShadowStyle } from "../shared/Styles";
import NewTodoItem from "../components/ListItems/NewTodoItem";
import {
  addTodoToTodoList,
  removeTodoFromTodoList,
  removeTodoListAction
} from "../redux/TodoActions";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/Buttons/HeaderButton";

const EditTodoScreen = props => {
  const todoListId = props.navigation.getParam("todoListId");
  const todoList =
    useSelector(state =>
      state.todoLists.find(todoList => todoList.id === todoListId)
    ) || {};
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTodo = useCallback(
    (newTodoTitle: string) => {
      if (newTodoTitle === "") {
        return;
      }
      dispatch(
        addTodoToTodoList(todoListId, {
          id: `TODO ${Math.random()}`,
          title: newTodoTitle,
          done: false
        })
      );
    },
    [dispatch, todoListId]
  );

  const removeTodo = useCallback(
    (id: string) => {
      dispatch(removeTodoFromTodoList(todoListId, id));
    },
    [dispatch, todoListId]
  );

  useEffect(() => {
    const removeTodoList = () => {
      dispatch(removeTodoListAction(todoListId));
    };
    props.navigation.setParams({ removeTodoList });
  }, [todoListId]);

  return (
    <FlatList
      keyExtractor={(todoId: string) => todoId}
      data={todoList.todosIds}
      keyboardShouldPersistTaps="handled"
      renderItem={(item: ListRenderItemInfo<string>) => (
        <EditTodoItem
          id={item.item}
          title={todos[item.item].title}
          onRemovePress={() => removeTodo(item.item)}
        />
      )}
      ItemSeparatorComponent={() => <View style={SeparatorStyle} />}
      ListHeaderComponent={
        <NewTodoItem onAddPress={newTodoTitle => addTodo(newTodoTitle)} />
      }
      ListHeaderComponentStyle={SeparatorShadowStyle}
    />
  );
};

EditTodoScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: `Edit - ${navigation.getParam("title", "Unnamed")}`,
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Delete"
        iconName="ios-trash"
        onPress={() => {
          if (navigation.getParam("removeTodoList")) {
            navigation.getParam("removeTodoList")();
            navigation.popToTop();
          }
        }}
      />
    </HeaderButtons>
  )
});

export default EditTodoScreen;
