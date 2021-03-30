//React Imports
import * as React from "react";
import { View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Components
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import img from "./foodtruck.png";

//Styles
import { IndexView, IndexImage } from "./styles";

export default function Authentication() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <>
      <IndexView>
        <IndexImage source={img} />
      </IndexView>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "Login") {
              iconName = focused ? "login" : "login-variant";
            } else if (route.name === "SignUp") {
              iconName = focused
                ? "account-multiple-plus"
                : "account-multiple-plus-outline";
            }

            return (
              <MaterialCommunityIcons name={iconName} size={22} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          indicatorStyle: { backgroundColor: "tomato" },
          showIcon: true,
        }}
      >
        <Tab.Screen name="Login" component={SignIn} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </>
  );
}
