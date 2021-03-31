//React Imports
import React, { useState } from "react";
import { ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";

//Actions
import { truckDetail } from "../../store/actions/trucksActions";

//Styles
import {
  TruckLabelStyle,
  TruckImageStyle,
  TruckCard,
  ListView,
  Header,
  Search,
  MainView,
} from "./styles";

export default function TrucksList() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const trucks = useSelector((state) => state.trucksReducer.trucks);

  const list = trucks
    .filter((truck) => truck.name.toLowerCase().includes(query.toLowerCase()))
    .map((truck) => (
      <TruckCard
        key={truck.id}
        onPress={() => {
          dispatch(truckDetail(truck.id)), navigation.navigate("Detail");
        }}
      >
        {/* <TruckImageStyle
          source={{
            uri: truck.uri,
          }}
        /> */}
        <TruckLabelStyle>{truck.name}</TruckLabelStyle>
      </TruckCard>
    ));

  return (
    <MainView>
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
          <TextInput
            clearButtonMode="always"
            placeholder="  Search..."
            onChangeText={setQuery}
            value={query}
            style={{
              width: "70%",
            }}
          />
          <Icon
            type="materialicons"
            name="clear"
            size={25}
            onPress={() => setQuery("")}
          />
        </Search>

        <ListView>{list}</ListView>
      </ScrollView>
    </MainView>
  );
}
