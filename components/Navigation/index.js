//React Imports
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Authentication from "../Authentication";

//Components
import Home from "../Home";
import TrucksHome from "../TrucksHome";
import TrucksDetail from "../TrucksDetail";
import Profile from "../Profile";
import TrucksList from "../TrucksList";
import CategoryTruckList from "../CategoryTruckList";
import Map from "../Map";
import MapScreen from "../MapScreen"

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

export const TruckMapNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Screen
        name="TruckMap"
        component={Map}
        options={{
          headerShown: false,
        }}
      />
    
export const MapNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator screenOptions={{ headerTitleAlign: "center" }}/>
      <Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
  );
};
