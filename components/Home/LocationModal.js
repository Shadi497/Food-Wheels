//React Imports
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Modal from "react-native-modal";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";

//Actions
import { getLocation } from "../../store/actions/authActions";

//Styles
import { ModalStyles } from "./styles";

export default function LocationModal({
  isLocationModalVisible,
  setUserLocation,
}) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch();

  const loc = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    dispatch(getLocation(location.coords.longitude, location.coords.latitude));
    setUserLocation({ isLocationModalVisible: false });
  };

  const access = () => {
    setUserLocation({ isLocationModalVisible: true });
    loc();
  };
  return (
    <Modal
      isVisible={isLocationModalVisible}
      onBackdropPress={() => setUserLocation({ isLocationModalVisible: false })}
    >
      <View style={ModalStyles.centeredView}>
        <View style={ModalStyles.modalView}>
          <Text style={ModalStyles.textStyle}>
            Food On Wheels uses location for better User experience & only while
            using the application.
          </Text>
          <Button
            color="tomato"
            title="Access Location"
            onPress={access}
          ></Button>
          <Text
            style={ModalStyles.NoStyle}
            onPress={() => setUserLocation({ isLocationModalVisible: false })}
          >
            No thanks
          </Text>
        </View>
      </View>
    </Modal>
  );
}
