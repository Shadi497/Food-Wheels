//React imports
import { View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

//Styles
import { Title, HomeBackground } from "./styles";

const Home = ({ navigation }) => {
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
        onPress={() => navigation.replace("TrucksHome")}
      >
        Get Started
      </Button>
    </View>
  );
};

export default Home;
