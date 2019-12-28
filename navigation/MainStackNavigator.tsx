import { createStackNavigator } from "react-navigation-stack";
import TabsNavigator from "./TabsNavigator";
import TodoScreen from "../screens/TodoScreen";
import { createAppContainer, withOrientation } from "react-navigation";

const MainStackNavigator = createStackNavigator({
  TabsStack: {
    screen: TabsNavigator,
    navigationOptions: { headerShown: false }
  },
  TodoScreen: { screen: TodoScreen, navigationOptions: { headerShown: true } }
});

export default createAppContainer(MainStackNavigator);
