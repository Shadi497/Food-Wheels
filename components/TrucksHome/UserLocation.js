//React Imports
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { PermissionsAndroid } from "react-native";

//Actions
import { getLocation } from "../../store/actions/authActions";

//Components
import LocationModal from "../Home/LocationModal";

export default function UserLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [grantedmodal, setGrantedModal] = useState();
  const [userlocation, setUserLocation] = useState({
    location: null,
    errorMessage: null,
    isLocationModalVisible: true,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );

      if (granted === false) {
        setGrantedModal(false);
      } else {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        dispatch(
          getLocation(location.coords.longitude, location.coords.latitude)
        );
      }
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>
      {grantedmodal === false && (
        <LocationModal
          isLocationModalVisible={userlocation.isLocationModalVisible}
          setUserLocation={setUserLocation}
        />
      )}
    </View>
  );
}
