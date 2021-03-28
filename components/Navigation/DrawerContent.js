//React Imports
import { Title, Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import { ToastAndroid } from "react-native";
import { useDispatch } from "react-redux";

//Actions
import { signout } from "../../store/actions/authActions";

export default function DrawerContent(props) {
  const getActiveRouteState = function (routes, index, name) {
    return routes[index].name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
  };

  const users = useSelector((state) => state.authReducer.user);

  const dispatch = useDispatch();

  const Out = async (event) => {
    event.preventDefault();
    await dispatch(signout());
    // await dispatch(clearProfile());
    ToastAndroid.show(`See you soon 😔`, ToastAndroid.SHORT, ToastAndroid.TOP);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>
          <View style={{ flexDirection: "column" }}>
            <Title style={styles.title}>Welcome, Foodie</Title>
          </View>
          <Drawer.Section>
            <DrawerItem
              focused={getActiveRouteState(
                props.state.routes,
                props.state.index,
                "Home"
              )}
              activeTintColor="tomato"
              activeBackgroundColor="white"
              inactiveTintColor="white"
              icon={({ color, size }) => (
                <Icon name={"home-outline"} color={color} size={size} />
              )}
              label="Home"
              labelStyle={{ fontWeight: "bold" }}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              focused={getActiveRouteState(
                props.state.routes,
                props.state.index,
                users ? "Profile" : "Authentication"
              )}
              activeTintColor="tomato"
              activeBackgroundColor="white"
              inactiveTintColor="white"
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label={users ? "Profile" : "Sign In"}
              labelStyle={{ fontWeight: "bold" }}
              onPress={() => {
                props.navigation.navigate(users ? "Profile" : "Authentication");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {users && (
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            activeTintColor="tomato"
            activeBackgroundColor="white"
            inactiveTintColor="white"
            icon={({ color, size }) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Sign Out"
            onPress={Out}
          />
        </Drawer.Section>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: "5%",
    marginBottom: "15%",
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});
