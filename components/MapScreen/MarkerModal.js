//React Imports
import React from "react";
import {
  StyleSheet,
  Modal,
  View,
  Text,
  ActivityIndicator,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { truckDetail } from "../../store/actions/trucksActions";
import { useNavigation } from "@react-navigation/native";

export default function UpdateModal({
  modalVisible,
  setModalVisible,
  foodTruck,
}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
          {foodTruck ? (
            <>
              <Text>{foodTruck.name}</Text>
              <Button
                title="Detail"
                onPress={() => (
                  dispatch(truckDetail(foodTruck.id)),
                  navigation.navigate("Detail"),
                  setModalVisible(!modalVisible)
                )}
              />
            </>
          ) : (
            <ActivityIndicator />
          )}
        </View>
      </View>
    </Modal>
  );
}
