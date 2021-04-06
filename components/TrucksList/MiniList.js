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

export default function MiniList({ trucks }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const trucksList = trucks.map((truck) => (
    <TruckCard
      key={truck.id}
      onPress={() => {
        dispatch(truckDetail(truck.id)), navigation.navigate("Detail");
      }}
    >
      <TruckImageStyle
        source={{
          uri: truck.image,
        }}
      />
      <TruckLabelStyle>{truck.name}</TruckLabelStyle>
    </TruckCard>
  ));

  return <MiniListView>{trucksList}</MiniListView>;
}
