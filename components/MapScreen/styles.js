import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Label = styled.Text`
  font-size: 22px;
  align-self: center;
  font-weight: bold;
  margin-bottom: 15%;
`;

export const BtnView = styled.View`
  margin-top: 8%;
  height: 90%;
`;

export const style = StyleSheet.create({
  marker: {
    width: 30,
    height: 30,
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
    height: "40%",
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    // paddingTop: 35,
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
