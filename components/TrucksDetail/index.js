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

import { Platform } from "react-native";
import { Linking } from "react-native";

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

  let time = () =>
    setTimeout(() => {
      dispatch(profile(user.username));
    }, 1000);

  clearTimeout(time);

  let followed;
  if (checkProfile)
    followed = checkProfile.FoodTrucks.some((f) => f.id === truckDetail.id);

  const Follow = () => {
    if (user) {
      dispatch(follow(truckDetail.id));
      time();
      ToastAndroid.show(`Added successfully.`, ToastAndroid.LONG);
    } else {
      navigation.navigate("Authentication");
      ToastAndroid.show(
        `Please login to favorite the truck.`,
        ToastAndroid.SHORT
      );
    }
  };

  const UnFollow = () => {
    if (user) {
      dispatch(unfollow(truckDetail.id));
      time();
      ToastAndroid.show(`Removed successfully.`, ToastAndroid.LONG);
    } else navigation.navigate("Authentication");
  };

  const scheme = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" });
  const latLng = `26.263528, 50.594639`;
  const label = "Custom Label";
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  const Maps = () => Linking.openURL(url);

  const Insta = () => Linking.openURL("https://www.instagram.com/chipsytime/");
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
        <Icon
          type="font-awesome"
          name="instagram"
          size={45}
          iconStyle={{ marginTop: "40%" }}
          onPress={Insta}
          color="tomato"
        />
        <Icon
          type="entypo"
          name="location"
          size={45}
          iconStyle={{ marginTop: "10%" }}
          onPress={Maps}
          color="tomato"
        />
      </ScrollView>
    </MainView>
  );
}
