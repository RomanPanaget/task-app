import React from "react";
import MainStackNavigator from "./navigation/MainStackNavigator";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoReducer from "./redux/TodoListReducer";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { AsyncStorage } from "react-native";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, todoReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStackNavigator />
      </PersistGate>
    </Provider>
  );
}
