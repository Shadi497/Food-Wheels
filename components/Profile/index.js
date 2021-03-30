//React Imports
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import UserAvatar from "react-native-user-avatar";
import { useSelector } from "react-redux";

//Styles
import {
  Header,
  MainView,
  HeaderTxt,
  TxtStyle,
  Card,
  InfoStyle,
  LabelStyle,
  InfoView,
} from "./styles";

//Components
import UpdateModal from "./UpdateModal";

export default function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const checkProfile = useSelector((state) => state.authReducer.profile);
  const [user, setUser] = useState(checkProfile);
  return (
    checkProfile && (
      <MainView>
        <ScrollView>
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
          <TxtStyle>Information</TxtStyle>

          <Card>
            <UserAvatar
              size={50}
              style={{ marginLeft: "6%" }}
              name={`${checkProfile.firstName} ${checkProfile.lastName}`}
              bgColor="tomato"
            />
            <InfoView>
              <LabelStyle>{`${checkProfile.firstName} ${checkProfile.lastName} `}</LabelStyle>
              <InfoStyle>{`${checkProfile.email}`}</InfoStyle>
              <InfoStyle>{`${checkProfile.phoneNumber}`}</InfoStyle>
            </InfoView>
            <Icon
              type="material-community"
              name="circle-edit-outline"
              iconStyle={{ marginLeft: "28%" }}
              size={25}
              onPress={() => setModalVisible(true)}
            />
          </Card>

          <UpdateModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            user={user}
            setUser={setUser}
          />
          <TxtStyle>Favourite Trucks</TxtStyle>
        </ScrollView>
      </MainView>
    )
  );
}
