import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { DrawerNavigator } from "./components/Navigation/DrawerNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <DrawerNavigator />
    </Provider>
  );
}
