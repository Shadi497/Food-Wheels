//React Imports
import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-native-paper";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import {Linking, Modal, View, ActivityIndicator } from "react-native";

//Actions
import { truckDetail } from "../../store/actions/trucksActions";

//Styles
import { BtnView, Label, ModalStyles } from "./styles";


export default function UpdateModal({
  modalVisible,
  setModalVisible,
  foodTruck,
}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const scheme = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" });
  const latLng = `${foodTruck && foodTruck.location.coordinates[1]}, ${
    foodTruck && foodTruck.location.coordinates[0]
  }`;
  const label = "Custom Label";
  const url = Platform.select({
    ios: `https://maps.google.com/?q=${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  const Maps = () => Linking.openURL(url);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={ModalStyles.centeredView}>
        <View style={ModalStyles.modalView}>
          {foodTruck ? (
            <>
              <Icon
                type="material-community"
                name="close-circle-outline"
                size={30}
                color="#000"
                iconStyle={{ alignSelf: "flex-end" }}
                onPress={() => setModalVisible(!modalVisible)}
              />
              <Label>{foodTruck.name}</Label>
              <BtnView>
                <Button
                  mode="contained"
                  style={{
                    width: "50%",
                    alignSelf: "center",
                    height: "17%",
                    backgroundColor: "tomato",
                    borderRadius: 25,
                  }}
                  uppercase={false}
                  labelStyle={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                  icon="information"
                  onPress={() => {
                    dispatch(truckDetail(foodTruck.id)),
                      navigation.navigate("Detail"),
                      setModalVisible(!modalVisible);
                  }}
                >
                  Details
                </Button>
                <Button
                  mode="contained"
                  style={{
                    width: "50%",
                    alignSelf: "center",
                    height: "17%",
                    marginTop: "8%",
                    backgroundColor: "tomato",
                    borderRadius: 25,
                  }}
                  uppercase={false}
                  labelStyle={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                  icon="navigation"
                  onPress={Maps}
                >
                  Navigate
                </Button>
              </BtnView>
            </>
          ) : (
            <ActivityIndicator />
          )}
        </View>
      </View>
    </Modal>
  );
}
