//React Imports
import React from "react";
import { useNavigation } from "@react-navigation/native";

//Styles
import {
  TruckLabelStyle,
  TruckImageStyle,
  TruckCard,
  MiniListView,
} from "./styles";

export default function MiniList({ trucks }) {
  const navigation = useNavigation();

  const trucksList = trucks.map((truck) => (
    <TruckCard key={truck.id} onPress={() => navigation.navigate("Detail")}>
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
