//React Imports
import React, { useState } from "react";
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
  Search,
} from "./styles";
import { Input } from "native-base";

export default function TrucksList() {
  const navigation = useNavigation();
  const [query, setQuery] = useState("");

  const data = [
    {
      uri:
        "https://cdn.vox-cdn.com/thumbor/hpLuwWsAqHzuKP0oPPzox6DORhA=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/66680032/DSC05430.0.jpg",
      label: "Trap Kitchen",
      id: 1,
    },
    {
      uri: "https://cdn.5280.com/2020/12/Courtesy-Downtown-Fingers.jpg",
      label: "Downtown Fingers",
      id: 2,
    },
  ];

  const list = data
    .filter((l) => l.label.toLowerCase().includes(query.toLowerCase()))
    .map((l) => (
      <TruckCard key={l.id} onPress={() => navigation.navigate("Detail")}>
        <TruckImageStyle
          source={{
            uri: l.uri,
          }}
        />
        <TruckLabelStyle>{l.label}</TruckLabelStyle>
      </TruckCard>
    ));

  return (
    <View style={{ backgroundColor: "#e5e4e2", height: "100%" }}>
      <ScrollView>
        <Header>
          <Icon
            type="ionicon"
            name="caret-back-outline"
            size={25}
            onPress={() => navigation.goBack()}
          />
        </Header>
        <Search>
          <Icon type="ionicon" name="search-sharp" size={25} />
          <Input placeholder="  Search..." onChangeText={setQuery} />
        </Search>

        <ListView>{list}</ListView>
      </ScrollView>
    </View>
  );
}
