//React Imports
import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";

//Components
import CategoriesCards from "./CategoriesCards";
import MiniList from "../TrucksList/MiniList";
import UserLocation from "./UserLocation";

//Styles
import { TxtStyle, More, Header, MainView } from "./styles";

//Actions
import { profile } from "../../store/actions/authActions";

export default function TrucksHome() {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const checkProfile = useSelector((state) => state.authReducer.profile);

  const categories = useSelector((state) => state.categoryReducer.category);
  const trucks = useSelector((state) => state.trucksReducer.trucks);

  checkProfile === null && user && dispatch(profile(user.username));

  return (
    <MainView>
      <ScrollView>
        <Header>
          <Icon
            type="font-awesome-5"
            name="grip-lines"
            size={25}
            onPress={() => navigation.openDrawer()}
          />
        </Header>
        {user && <UserLocation />}

        <TxtStyle>Categories</TxtStyle>
        <CategoriesCards categories={categories} />
        <View style={{ flexDirection: "row" }}>
          <TxtStyle>Food Trucks</TxtStyle>
          <More onPress={() => navigation.navigate("TrucksList")}>
            View More
          </More>
        </View>
        <MiniList trucks={trucks.slice(0, 3)} />
      </ScrollView>
    </MainView>
  );
}
