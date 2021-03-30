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

  const [state, setstate] = useState({
    location: null,
    errorMessage: null,
    isLocationModalVisible: true,
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const checkProfile = useSelector((state) => state.authReducer.profile);
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
        {/* {user && <UserLocation state={state} setstate={setstate} />} */}
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
    </MainView>
  );
}
