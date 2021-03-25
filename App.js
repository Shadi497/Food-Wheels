import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { RootNavigator } from "./components/Navigation";
import { DrawerNavigator } from "./components/Navigation/DrawerNavigation";

export default function App() {
  return (
    <Provider store={store}>
      {/* <RootNavigator /> */}
      <DrawerNavigator />
    </Provider>
  );
}
