//React imports
import { ImageBackground, Text, ToastAndroid, View } from "react-native";
import React from "react";
import { Icon } from "native-base";
import { useDispatch, useSelector } from "react-redux";

//Styles
import { Title, ButtonStyle, HomeBackground, ButtonView } from "./styles";

import { Button } from "react-native-paper";

//Actions imports
import {
  // clearProfile,
  // profile,
  signout,
} from "../../store/actions/authActions";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  // const user = useSelector((state) => state.authReducer.user);
  // const checkProfile = useSelector((state) => state.authReducer.profile);
  // checkProfile === null && user && dispatch(profile(user.username));

  const Out = async (event) => {
    event.preventDefault();
    await dispatch(signout());
    // await dispatch(clearProfile());
    ToastAndroid.show(`See you soon 😔`, ToastAndroid.SHORT, ToastAndroid.TOP);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "tomato" }}>
      <Title>Food On Wheels</Title>
      <HomeBackground
        source={{
          uri:
            "https://pro2-bar-s3-cdn-cf3.myportfolio.com/bddb83114cb5f56a3f4859794c39b2e7/416ee897-03bd-4564-9084-c6dff9cf6872_rw_1200.png?h=8b84615a41352a000ebbaa4299431d12",
        }}
      ></HomeBackground>
      <Button
        mode="contained"
        style={{
          width: "50%",
          alignSelf: "center",
          height: "9%",
          justifyContent: "center",
          alignItems: "center",
        }}
        labelStyle={{
          color: "red",
          fontWeight: "bold",
        }}
        color="white"
        onPress={() => navigation.replace("TrucksList")}
      >
        Get Started
      </Button>
    </View>
  );
};

export default Home;
