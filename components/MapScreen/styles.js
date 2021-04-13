import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Label = styled.Text`
  font-size: 22px;
  align-self: center;
  font-weight: bold;
  margin-top: 5%;
`;

export const Distance = styled.Text`
  font-size: 15px;
  align-self: center;
  color: #696969;
  font-weight: bold;
  margin-top: 3%;
`;

export const BtnView = styled.View`
  height: 90%;
  margin-top: 12%;
`;

export const TruckImageStyle = styled.Image`
  align-self: center;
  width: 43%;
  height: 90px;
  border-radius: 30px;
  resize-mode: contain;
`;

export const style = StyleSheet.create({
  marker: {
    width: 35,
    height: 35,
    borderRadius: 10,
  },
});

export const ModalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "65%",
    height: "55%",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
