//React Imports
import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          margin: 50,
        }}
      >
        Profile
      </Text>
      <Button mode="contained" onPress={() => navigation.navigate("Home")}>
        Home
      </Button>
    </View>
  );
}
