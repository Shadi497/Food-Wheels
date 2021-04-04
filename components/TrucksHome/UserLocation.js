//React Imports
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Modal from "react-native-modal";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { useDispatch } from "react-redux";
import { Spinner } from "native-base";

//Styles
import { ModalStyles } from "./styles";

//Actions
import { getLocation } from "../../store/actions/authActions";

export default function UserLocation({ state, setstate }) {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();

  const _getLocationAsync = async () => {
    try {
      setIsFetching(true);
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== "granted") {
        setstate({
          errorMessage: "Permission to access location was denied",
        });
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setstate({ location });
      dispatch(
        getLocation(location.coords.longitude, location.coords.latitude)
      );
      setIsFetching(false);
    } catch (error) {
      let status = Location.getProviderStatusAsync();
      if (!status.locationServicesEnabled) {
        setstate({ isLocationModalVisible: true });
      }
    }
  };

  return (
    <Modal
      isVisible={state.isLocationModalVisible}
      onBackdropPress={() => setstate({ isLocationModalVisible: false })}
    >
      <View style={ModalStyles.centeredView}>
        <View style={ModalStyles.modalView}>
          {isFetching ? (
            <Spinner style={{ marginTop: 35 }} />
          ) : (
            <>
              <Text style={ModalStyles.textStyle}>
                Food On Wheels uses location for better User experience & only
                while using the application.
              </Text>
              <Button
                color="tomato"
                title="Access Location"
                onPress={_getLocationAsync}
              ></Button>
              <Text
                style={ModalStyles.NoStyle}
                onPress={() => setstate({ isLocationModalVisible: false })}
              >
                No thanks
              </Text>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
}
