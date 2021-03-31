//React Imports
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

//Actions
import { truckDetail } from "../../store/actions/trucksActions";

//Styles
import {
  TruckLabelStyle,
  TruckImageStyle,
  TruckCard,
  MiniListView,
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
      {/* <TruckImageStyle
            source={{
              uri:
                "https://cdn.vox-cdn.com/thumbor/hpLuwWsAqHzuKP0oPPzox6DORhA=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/66680032/DSC05430.0.jpg",
            }}
          /> */}
      <TruckLabelStyle>{truck.name}</TruckLabelStyle>
    </TruckCard>
  ));

  return <MiniListView>{trucksList}</MiniListView>;
}
