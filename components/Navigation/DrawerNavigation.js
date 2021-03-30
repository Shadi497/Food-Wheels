//React Imports
import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

//Components
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { AuthenticationNavigator, HomeNavigator, ListNavigator } from ".";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          drawerStyle={{
            width: "65%",
            paddingTop: "25%",
            backgroundColor: "#2ecc71",
          }}
          drawerType="back"
          drawerContentOptions={{
            activeTintColor: "tomato",
            activeBackgroundColor: "white",
            inactiveTintColor: "white",
          }}
        >
          <Drawer.Screen
            name="Login in / Signup"
            component={AuthenticationNavigator}
          />
          <Drawer.Screen name="Home" component={HomeNavigator} />
          <Drawer.Screen name="Food Trucks" component={ListNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};
