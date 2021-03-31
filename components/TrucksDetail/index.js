//React Imports
import React, { useCallback, useState } from "react";
import { ScrollView, RefreshControl, ToastAndroid } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

//Actions
import { follow, unfollow, profile } from "../../store/actions/authActions";

//Styles
import { TruckNameStyle, Header, MainView } from "./styles";

export default function TrucksDetail() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const truckDetail = useSelector((state) => state.trucksReducer.truckDetail);
  const user = useSelector((state) => state.authReducer.user);
  const checkProfile = useSelector((state) => state.authReducer.profile);

  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(profile(user.username));
    wait(2000).then(() => setRefreshing(false));
  }, []);

  let followed;
  if (checkProfile)
    followed = checkProfile.FoodTrucks.some((f) => f.id === truckDetail.id);

  const Follow = () => {
    if (user) {
      dispatch(follow(truckDetail.id));
      ToastAndroid.show(
        `Added successfully. Refresh the page.`,
        ToastAndroid.LONG
      );
    } else navigation.navigate("Authentication");
  };

  const UnFollow = () => {
    if (user) {
      dispatch(unfollow(truckDetail.id));
      ToastAndroid.show(
        `Removed successfully. Refresh the page.`,
        ToastAndroid.LONG
      );
    } else navigation.navigate("Authentication");
  };

  return (
    <MainView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header>
          <Icon
            type="ionicon"
            name="caret-back-outline"
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Icon
            type="antdesign"
            name={followed ? "heart" : "hearto"}
            size={25}
            iconStyle={{ marginLeft: "80%" }}
            onPress={followed ? UnFollow : Follow}
            color="tomato"
          />
        </Header>
        {/* <Image
          source={{
            uri: truckDetail.uri,
          }}
        /> */}
        <TruckNameStyle>{truckDetail.name}</TruckNameStyle>
      </ScrollView>
    </MainView>
  );
}
