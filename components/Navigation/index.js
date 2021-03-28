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
import TrucksHome from "../TrucksHome";
import TrucksDetail from "../TrucksDetail";

import { Image, View } from "react-native";
import { Icon } from "react-native-elements";
import Profile from "../Profile";
import TrucksList from "../TrucksList";

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

export const ProfileNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Screen
        name="Profile"
        component={Profile}
        options={{
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

export const HomeNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="TrucksHome"
        component={TrucksHome}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export const TrucksListNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Screen
        name="TrucksList"
        component={TrucksList}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export const TruckNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  const navigation = useNavigation();

  return (
    <Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Screen
        name="TrucksDetail"
        component={TrucksDetail}
        options={{
          title: "Detail",
          headerLeft: () => (
            <View style={{ marginLeft: 15 }}>
              <Icon
                type="ionicon"
                name="caret-back-outline"
                size={25}
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        }}
      />
    </Navigator>
  );
};
