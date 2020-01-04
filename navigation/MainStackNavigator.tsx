import { createStackNavigator } from "react-navigation-stack";
import TodoScreen from "../screens/TodoScreen";
import { createAppContainer } from "react-navigation";
import EditTodoScreen from "../screens/EditTodoScreen";
import NewTodoListScreen from "../screens/NewTodoListScreen";
import TodoListScreen from "../screens/TodoListScreen";

const MainStackNavigator = createStackNavigator({
  TodoListScreen: TodoListScreen,
  TodoScreen: TodoScreen,
  EditTodoScreen: EditTodoScreen,
  NewTodoListScreen: NewTodoListScreen
});

export default createAppContainer(MainStackNavigator);
