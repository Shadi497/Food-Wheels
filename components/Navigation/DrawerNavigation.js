//React Imports
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//Components
import {
  AuthenticationNavigator,
  CategoryTrucksListNavigator,
  HomeNavigator,
  ProfileNavigator,
  TruckNavigator,
  TrucksListNavigator,
  MapNavigator,
} from ".";
import DrawerContent from "./DrawerContent";
export const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="Home"
        drawerStyle={{
          width: "65%",
          paddingTop: "25%",
          backgroundColor: "#ff917e",
        }}
        drawerType="back"
      >
        <Drawer.Screen
          name="Authentication"
          component={AuthenticationNavigator}
        />
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Profile" component={ProfileNavigator} />
        <Drawer.Screen name="Detail" component={TruckNavigator} />
        <Drawer.Screen name="TrucksList" component={TrucksListNavigator} />
        <Drawer.Screen name="Map" component={MapNavigator} />
        <Drawer.Screen
          name="CategoryTrucksList"
          component={CategoryTrucksListNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
