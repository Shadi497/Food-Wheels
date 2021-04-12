//React Imports
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Authentication from "../Authentication";
import { Button } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { Icon } from "react-native-elements";

//Components
import Home from "../Home";
import TrucksHome from "../TrucksHome";
import TrucksDetail from "../TrucksDetail";
import Profile from "../Profile";
import TrucksList from "../TrucksList";
import CategoryTruckList from "../CategoryTruckList";
import MapScreen from "../MapScreen";

export const AuthenticationNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Screen
        name="Authentication"
        component={Authentication}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export const ProfileNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
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

export const CategoryTrucksListNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Screen
        name="TrucksList"
        component={CategoryTruckList}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export const TruckNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Screen
        name="TrucksDetail"
        component={TrucksDetail}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export const MapNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Screen
        name="Map"
        component={MapScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              type="ionicon"
              iconStyle={{ marginLeft: 15, color: "white" }}
              name="caret-back-outline"
              size={25}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitle: "Favourite Trucks Map",
          headerStyle: {
            backgroundColor: "#ff917e",
          },
          headerTintColor: "#fff",
        })}
      />
    </Navigator>
  );
};
