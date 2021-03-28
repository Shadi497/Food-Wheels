//React Imports
import React from "react";
import { View } from "react-native";

//Styles
import {
  TruckLabelStyle,
  TruckImageStyle,
  TruckCard,
  MiniListView,
} from "./styles";

export default function MiniList() {
  return (
    <MiniListView>
      <TruckCard>
        <TruckImageStyle
          source={{
            uri:
              "https://cdn.vox-cdn.com/thumbor/hpLuwWsAqHzuKP0oPPzox6DORhA=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/66680032/DSC05430.0.jpg",
          }}
        />
        <TruckLabelStyle>Trap Kitchen</TruckLabelStyle>
      </TruckCard>

      <TruckCard>
        <TruckImageStyle
          source={{
            uri: "https://cdn.5280.com/2020/12/Courtesy-Downtown-Fingers.jpg",
          }}
        />
        <TruckLabelStyle>Downtown Fingers</TruckLabelStyle>
      </TruckCard>
    </MiniListView>
  );
}
