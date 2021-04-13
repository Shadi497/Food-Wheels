//React Imports
import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-native-paper";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Linking, Modal, View, ActivityIndicator } from "react-native";

//Actions
import { truckDetail } from "../../store/actions/trucksActions";

//Styles
import {
  BtnView,
  Label,
  ModalStyles,
  TruckImageStyle,
  Distance,
} from "./styles";

export default function UpdateModal({
  modalVisible,
  setModalVisible,
  foodTruck,
  location,
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

  function distance(lat1, lon1, lat2, lon2) {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 1.609344;
      return parseInt(dist);
    }
  }

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
              <TruckImageStyle
                source={{
                  uri: foodTruck.image,
                }}
              />
              <Label>{foodTruck.name}</Label>
              <Distance>
                {`${distance(
                  foodTruck.location.coordinates[1],
                  foodTruck.location.coordinates[0],
                  location.latitude,
                  location.longitude
                )} km`}
              </Distance>
              <BtnView>
                <Button
                  mode="contained"
                  style={{
                    width: "50%",
                    alignSelf: "center",
                    height: "13%",
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
                    height: "13%",
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
