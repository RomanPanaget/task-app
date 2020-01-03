import React from "react";
import MainStackNavigator from "./navigation/MainStackNavigator";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoReducer from "./redux/TodoListReducer";

const store = createStore(todoReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
}
