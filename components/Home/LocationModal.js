//React Imports
import React from "react";
import { View, Text, Button } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

//Styles
import { ModalStyles } from "./styles";

export default function LocationModal({
  isLocationModalVisible,
  setUserLocation,
}) {
  const navigation = useNavigation();

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
            onPress={() => navigation.replace("TrucksHome")}
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
