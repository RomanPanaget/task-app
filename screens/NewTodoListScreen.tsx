import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItemInfo,
  Alert
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SeparatorShadowStyle, SeparatorStyle } from "../shared/Styles";
import NewTodoItem from "../components/ListItems/NewTodoItem";
import EditTodoItem from "../components/ListItems/EditTodoItem";
import { Todo } from "../models/Todo";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/Buttons/HeaderButton";
import { useDispatch } from "react-redux";
import { addTodoList } from "../redux/TodoActions";
import Colors from "../shared/Colors";

const NewTodoListScreen = props => {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = useCallback((title: string) => {
    if (!title) {
      return;
    }
    setTodos(todos => [
      ...todos,
      {
        id: `TODO ${Math.random()}`,
        title,
        done: false
      }
    ]);
  }, []);

  const removeTodo = useCallback((id: string) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  const save = useCallback(() => {
    dispatch(
      addTodoList(
        {
          id: `TODOLIST ${Math.random()}`,
          title,
          description,
          creationDate: new Date(),
          todosIds: todos.map(todo => todo.id)
        },
        todos
      )
    );
  }, [dispatch, title, description, todos]);

  useEffect(() => {
    const validate = () => {
      if (todos.length > 0 && title !== "") {
        save();
        return true;
      }
      return false;
    };
    props.navigation.setParams({ validate });
  }, [todos, title, save]);

  return (
    <View>
      <View style={styles.formContainer}>
        <View style={styles.formRow}>
          <Text style={styles.formTitle}>Title:</Text>
          <TextInput
            style={styles.formRowInput}
            value={title}
            onChangeText={setTitle}
            placeholder="Add a title"
            placeholderTextColor={Colors.lightGrey}
          />
        </View>
        <Text style={styles.formTitle}>Description:</Text>
        <TextInput
          style={styles.formInput}
          value={description}
          onChangeText={setDescription}
          placeholder="Add a description (optional)"
          placeholderTextColor={Colors.lightGrey}
        />
        <Text style={styles.formTitle}>Tasks:</Text>
      </View>
      <View>
        <FlatList
          keyExtractor={(todo: Todo) => todo.id}
          data={todos}
          keyboardShouldPersistTaps="handled"
          renderItem={(item: ListRenderItemInfo<Todo>) => (
            <EditTodoItem
              id={item.item}
              title={item.item.title}
              onRemovePress={() => removeTodo(item.item.id)}
            />
          )}
          ItemSeparatorComponent={() => <View style={SeparatorStyle} />}
          ListHeaderComponent={<NewTodoItem onAddPress={addTodo} />}
          ListHeaderComponentStyle={SeparatorShadowStyle}
        />
      </View>
    </View>
  );
};

NewTodoListScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "New Task List",
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Create"
        iconName="ios-save"
        onPress={() => {
          if (navigation.getParam("validate")()) {
            navigation.navigate("TodoListScreen");
          } else {
            Alert.alert("Please fill the empty fields");
          }
        }}
      />
    </HeaderButtons>
  )
});

export default NewTodoListScreen;

const styles = StyleSheet.create({
  formContainer: {
    padding: 12
  },
  formRow: {
    flexDirection: "row"
  },
  formTitle: {
    fontSize: 16,
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  formInput: {
    marginVertical: 14
  },
  formRowInput: {
    flex: 1,
    marginHorizontal: 14,
    alignItems: "center"
  }
});
