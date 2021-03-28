//React Imports
import React from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

//Components
import CategoriesCards from "./CategoriesCards";
import MiniList from "../TrucksList/MiniList";

//Styles
import { TxtStyle, More, Header } from "./styles";

export default function TrucksHome() {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#DCDCDC", height: "100%" }}>
      <ScrollView>
        <Header>
          <Icon
            type="font-awesome-5"
            name="grip-lines"
            size={25}
            onPress={() => navigation.openDrawer()}
          />
        </Header>
        <TxtStyle>Categories</TxtStyle>
        <CategoriesCards />
        <View style={{ flexDirection: "row" }}>
          <TxtStyle>Food Trucks</TxtStyle>
          <More onPress={() => navigation.navigate("TrucksList")}>
            View More
          </More>
        </View>
        <MiniList />
      </ScrollView>
    </View>
  );
}
