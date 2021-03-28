//React Imports
import React from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

//Components

//Styles
import {
  TruckLabelStyle,
  TruckImageStyle,
  TruckCard,
  ListView,
  Header,
} from "./styles";

export default function TrucksList() {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#DCDCDC", height: "100%" }}>
      <ScrollView>
        <Header>
          <Icon
            type="ionicon"
            name="caret-back-outline"
            size={25}
            onPress={() => navigation.goBack()}
          />
        </Header>
        <ListView>
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
                uri:
                  "https://cdn.5280.com/2020/12/Courtesy-Downtown-Fingers.jpg",
              }}
            />
            <TruckLabelStyle>Downtown Fingers</TruckLabelStyle>
          </TruckCard>
        </ListView>
      </ScrollView>
    </View>
  );
}
