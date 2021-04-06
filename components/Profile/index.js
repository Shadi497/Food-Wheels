//React Imports
import React, { useCallback, useState } from "react";
import { ScrollView, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import UserAvatar from "react-native-user-avatar";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { profile } from "../../store/actions/authActions";

//Styles
import {
  Header,
  MainView,
  HeaderTxt,
  TxtStyle,
  Card,
  InfoStyle,
  NameStyle,
  InfoView,
} from "./styles";

//Components
import UpdateModal from "./UpdateModal";
import { View } from "react-native";
import FavouriteTrucks from "./FavoriteTrucks";

export default function Profile() {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const checkProfile = useSelector((state) => state.authReducer.profile);
  const [user, setUser] = useState(checkProfile);

  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(profile(user.username));
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    checkProfile && (
      <MainView>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Header>
            <Icon
              type="ionicon"
              iconStyle={{ alignSelf: "flex-start" }}
              name="caret-back-outline"
              size={25}
              onPress={() => navigation.goBack()}
            />
            <HeaderTxt>My Profile</HeaderTxt>
          </Header>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <TxtStyle>Information</TxtStyle>
            <Icon
              type="material-community"
              name="circle-edit-outline"
              iconStyle={{ marginTop: "28%", marginLeft: "45%" }}
              size={25}
              onPress={() => setModalVisible(true)}
            />
          </View>
          <Card>
            <UserAvatar
              size={50}
              style={{ marginLeft: "6%" }}
              name={`${checkProfile.firstName} ${checkProfile.lastName}`}
              bgColor="tomato"
            />
            <InfoView>
              <NameStyle>{`${checkProfile.firstName} ${checkProfile.lastName} `}</NameStyle>
              <InfoStyle>{`${checkProfile.email}`}</InfoStyle>
              <InfoStyle>{`${checkProfile.phoneNumber}`}</InfoStyle>
            </InfoView>
          </Card>

          <UpdateModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            user={user}
            setUser={setUser}
          />
          <TxtStyle>Favourite Trucks</TxtStyle>
          <FavouriteTrucks />
        </ScrollView>
      </MainView>
    )
  );
}
