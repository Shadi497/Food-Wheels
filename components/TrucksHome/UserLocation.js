import React from "react";
import { View, Text, Button } from "react-native";
import Modal from "react-native-modal";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

//Styles
import { ModalStyles } from "./styles";

export default function UserLocation({ state, setstate }) {
  const _getLocationAsync = async () => {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== "granted") {
        setstate({
          errorMessage: "Permission to access location was denied",
        });
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setstate({ location });
    } catch (error) {
      let status = Location.getProviderStatusAsync();
      console.log("status", status);
      if (!status.locationServicesEnabled) {
        setstate({ isLocationModalVisible: true });
      }
    }
  };

  let status = Location.getProviderStatusAsync();
  console.log("status", status);

  let text = "Waiting..";
  if (state.errorMessage) {
    text = state.errorMessage;
  } else if (state.location) {
    text = `${state.location.coords.latitude} ${state.location.coords.longitude}`;
  }

  console.log(state.location);

  return (
    <Modal isVisible={state.location ? false : true}>
      <View style={ModalStyles.centeredView}>
        <View style={ModalStyles.modalView}>
          <Text style={ModalStyles.textStyle}>
            Food On Wheels uses location for better User experience & only while
            using the application.
          </Text>

          <Button title="Access Location" onPress={_getLocationAsync}></Button>
        </View>
      </View>
    </Modal>
  );
}
