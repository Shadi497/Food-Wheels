import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const HomeBackground = styled.Image`
  width: 60%;
  height: 60%;
  resize-mode: center;
  border-radius: 250px;
  align-self: center;
`;

export const TopStyling = styled.View`
  align-items: center;
  justify-content: center;
  height: 40%;
`;

export const MainView = styled.View`
  flex: 1;
  background-color: tomato;
`;

export const Title = styled.Text`
  color: white;
  font-size: 38px;
  text-align: center;
  font-weight: bold;
  margin-top: 25%;
`;

export const ModalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    paddingHorizontal: "3%",
    height: "43%",
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
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
    marginBottom: 35,
  },
  NoStyle: {
    color: "tomato",
    textAlign: "center",
    fontSize: 15,
    marginTop: 15,
  },
});
