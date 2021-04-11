//React Imports
import React, { useCallback, useState } from "react";
import {
  Linking,
  ScrollView,
  RefreshControl,
  ToastAndroid,
} from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import moment from "moment";

//Actions
import { follow, unfollow, profile } from "../../store/actions/authActions";

//Styles
import {
  TruckNameStyle,
  Header,
  MainView,
  TruckImageStyle,
  ImgView,
  LabelDetailStyle,
  IconView,
  InfoView,
  OpenTxtStyle,
  OpenStyle,
  OpenHStyle,
  OpenPressView,
  OpenView,
  SubMenuStyle,
  MenuView,
  MenuStyle,
} from "./styles";

export default function TrucksDetail() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const truckDetail = useSelector((state) => state.trucksReducer.truckDetail);
  const truckHours = useSelector((state) => state.trucksReducer.truckHours);
  const truckMenu = useSelector((state) => state.trucksReducer.truckMenu);
  const user = useSelector((state) => state.authReducer.user);
  const checkProfile = useSelector((state) => state.authReducer.profile);

  const [refreshing, setRefreshing] = useState(false);

  const [show, setShow] = useState(false);

  const [showmenu, setShowMenu] = useState(false);

  const scheme = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" });
  const latLng = `${
    truckDetail.location && truckDetail.location.coordinates[1]
  }, ${truckDetail.location && truckDetail.location.coordinates[0]}`;
  const label = "Custom Label";
  const url = Platform.select({
    ios: `https://maps.google.com/?q=${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  const Maps = () => Linking.openURL(url);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    user && dispatch(profile(user.username));
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

  const Insta = () => Linking.openURL(truckDetail.instagram);

  const trucktime =
    truckHours.length > 0 &&
    truckHours.map((hour) => (
      <OpenStyle key={hour.id}>
        <OpenHStyle>{hour.days}</OpenHStyle>
        <OpenHStyle>{`${moment(hour.openTime, "h:mm:ss").format(
          "hh:mm A"
        )} - ${moment(hour.closeTime, "h:mm:ss").format(
          "hh:mm A"
        )} `}</OpenHStyle>
      </OpenStyle>
    ));

  const truckmenu =
    Object.keys(truckMenu).length > 0 &&
    truckMenu.FoodCategories.map((menu) => (
      <OpenView key={menu.id}>
        <SubMenuStyle>{menu.name}</SubMenuStyle>
        {menu.FoodItems.map((item) => (
          <MenuView key={item.id}>
            <MenuStyle>{item.name}</MenuStyle>
            <MenuStyle>{`${item.price} BD`}</MenuStyle>
          </MenuView>
        ))}
      </OpenView>
    ));

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
        <ImgView>
          <TruckImageStyle
            source={{
              uri: truckDetail.image,
            }}
          />
        </ImgView>
        <TruckNameStyle>{truckDetail.name}</TruckNameStyle>
        <LabelDetailStyle>{truckDetail.description}</LabelDetailStyle>

        <InfoView>
          <IconView onPress={Insta}>
            <Icon
              type="font-awesome"
              name="instagram"
              size={28}
              color="tomato"
            />
          </IconView>
          <IconView onPress={Maps}>
            <Icon type="entypo" name="location" size={28} color="tomato" />
          </IconView>
        </InfoView>

        <OpenPressView onPress={() => setShow(!show)}>
          <Icon type="font-awesome" name="clock-o" size={20} color="tomato" />
          <OpenTxtStyle> Opening Hours </OpenTxtStyle>
          <Icon
            type="font-awesome"
            name={!show ? "chevron-down" : "chevron-up"}
            size={15}
            color="tomato"
          />
        </OpenPressView>
        {show && trucktime}

        <OpenPressView onPress={() => setShowMenu(!showmenu)}>
          <Icon
            type="material"
            name="restaurant-menu"
            size={20}
            color="tomato"
          />
          <OpenTxtStyle> Menu </OpenTxtStyle>
          <Icon
            type="font-awesome"
            name={!showmenu ? "chevron-down" : "chevron-up"}
            size={15}
            color="tomato"
          />
        </OpenPressView>
        {showmenu && truckmenu}
      </ScrollView>
    </MainView>
  );
}
