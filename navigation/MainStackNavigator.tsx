import { createStackNavigator } from "react-navigation-stack";
import TabsNavigator from "./TabsNavigator";
import TodoScreen from "../screens/TodoScreen";
import { createAppContainer } from "react-navigation";
import EditTodoScreen from "../screens/EditTodoScreen";
import NewTodoListScreen from "../screens/NewTodoListScreen";

const MainStackNavigator = createStackNavigator({
  TabsStack: {
    screen: TabsNavigator,
    navigationOptions: { headerShown: false }
  },
  TodoScreen: TodoScreen,
  EditTodoScreen: EditTodoScreen,
  NewTodoListScreen: NewTodoListScreen
});

export default createAppContainer(MainStackNavigator);
