//React imports
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { PermissionsAndroid } from "react-native";

//Components
import LocationModal from "./LocationModal";

//Styles
import { Title, HomeBackground, MainView } from "./styles";

const Home = ({ navigation }) => {
  const [userlocation, setUserLocation] = useState({
    location: null,
    errorMessage: null,
    isLocationModalVisible: false,
  });

  const [granted, setGranted] = useState(false);

  const check = async () => {
    let granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    setGranted(granted);
  };

  useEffect(() => {
    let isMounted = true;
    check().then(() => {
      if (isMounted) return granted;
    });
    return () => {
      isMounted = false;
    };
  });

  const checkProfile = useSelector((state) => state.authReducer.profile);

  return (
    <MainView>
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
        onPress={() => {
          if (checkProfile && checkProfile.location !== null && !granted)
            setUserLocation({ isLocationModalVisible: true });
          else if (checkProfile && checkProfile.location !== null && granted)
            navigation.replace("TrucksHome");
          else navigation.replace("TrucksHome");
        }}
      >
        Get Started
      </Button>
      {checkProfile && checkProfile.location.coordinates !== null && (
        <LocationModal
          isLocationModalVisible={userlocation.isLocationModalVisible}
          setUserLocation={setUserLocation}
        />
      )}
    </MainView>
  );
};

export default Home;
