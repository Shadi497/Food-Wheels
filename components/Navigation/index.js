//React Imports
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useSelector } from "react-redux";
import Authentication from "../Authentication";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

//Components
import ImageBar from "./ImageBar";
import Home from "../Home";
import TrucksList from "../TrucksList";
import { Image, View } from "react-native";
import { Icon } from "react-native-elements";

export const AuthenticationNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Screen
        name="Authentication"
        component={Authentication}
        options={{
          headerShown: false,
          headerBackImage: () => <ImageBar />,
        }}
      />
    </Navigator>
  );
};

export const HomeNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="TrucksList"
        component={TrucksList}
        options={{
          title: "List",
          headerLeft: () => (
            <View style={{ marginLeft: 15 }}>
              <Icon
                type="font-awesome-5"
                name="grip-lines"
                size={25}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </Navigator>
  );
};

export const ListNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Screen
        name="TrucksList"
        component={TrucksList}
        options={{
          title: "List",
          headerLeft: () => (
            <View style={{ marginLeft: 15 }}>
              <Icon
                type="font-awesome-5"
                name="grip-lines"
                size={25}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </Navigator>
  );
};
