//React Imports
import React from "react";
import { StyleSheet, Modal, View, Text } from "react-native";

export default function UpdateModal({
  modalVisible,
  setModalVisible,
  foodTruck,
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: "80%",
            height: "50%",
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            paddingTop: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Text>{foodTruck.name}</Text>
        </View>
      </View>
    </Modal>
  );
}
