import { createStackNavigator } from "react-navigation-stack";
import TabsNavigator from "./TabsNavigator";
import TodoScreen from "../screens/TodoScreen";
import { createAppContainer } from "react-navigation";
import NewTodoScreen from "../screens/NewTodoScreen";

const MainStackNavigator = createStackNavigator({
  TabsStack: {
    screen: TabsNavigator,
    navigationOptions: { headerShown: false }
  },
  TodoScreen: TodoScreen,
  NewTodoScreen: NewTodoScreen
});

export default createAppContainer(MainStackNavigator);
