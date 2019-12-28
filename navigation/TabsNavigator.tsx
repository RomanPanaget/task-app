import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../shared/Colors";
import { createStackNavigator } from "react-navigation-stack";
import TodoListScreen from "../screens/TodoListScreen";
import DoneScreen from "../screens/DoneScreen";

const DoneStackNavigator = createStackNavigator({
  DoneScreen: DoneScreen
});

const TodoStackNavigator = createStackNavigator({
  TodoListScreen: {
    screen: TodoListScreen,
    navigationOptions: { title: "Todo List" }
  }
});

const TabsNavigator = createBottomTabNavigator(
  {
    TodoStack: {
      screen: TodoStackNavigator,
      navigationOptions: {
        tabBarLabel: "To do",
        tabBarIcon: tabInfo => (
          <MaterialCommunityIcons
            name="checkbox-multiple-blank-outline"
            size={24}
            color={tabInfo.tintColor}
          />
        )
      }
    },
    DoneStack: {
      screen: DoneStackNavigator,
      navigationOptions: {
        tabBarLabel: "Done",
        tabBarIcon: tabInfo => (
          <MaterialCommunityIcons
            name="checkbox-multiple-marked"
            size={24}
            color={tabInfo.tintColor}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accent,
      inactiveTintColor: Colors.grey
    }
  }
);
export default TabsNavigator;
