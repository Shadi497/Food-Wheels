//React Imports
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-native-elements";

//Actions
import { truckDetail } from "../../store/actions/trucksActions";

//Styles
import {
  TruckLabelStyle,
  TruckCard,
  MiniListView,
  NullView,
  LabelStyle,
} from "./styles";

export default function FavouriteTrucks() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const checkProfile = useSelector((state) => state.authReducer.profile);

  const trucksList = checkProfile.FoodTrucks.map((truck) => (
    <TruckCard
      key={truck.id}
      onPress={() => {
        dispatch(truckDetail(truck.id)), navigation.navigate("Detail");
      }}
    >
      <TruckLabelStyle>{truck.name}</TruckLabelStyle>
    </TruckCard>
  ));

  return trucksList.length === 0 ? (
    <NullView>
      <Icon
        type="ionicon"
        name="heart-dislike-sharp"
        size={45}
        color="#c2c2c2"
      />
      <LabelStyle>Oh! You don't have any {"\n"} Favorite trucks!</LabelStyle>
      {/* <LabelDetailStyle>
              Make sure you entered the correct name.
            </LabelDetailStyle> */}
    </NullView>
  ) : (
    <MiniListView>{trucksList}</MiniListView>
  );
}
