import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const CardContainer = styled.View`
  justify-content: center;
  flex-direction: row;
`;
export const Card = styled.TouchableOpacity`
  background-color: white;
  align-items: center;
  margin-right: 45px;
  margin-bottom: 25px;
  border-radius: 10px;
  width: 170px;
  height: 200px;
  shadow-color: #000;
  shadow-offset: 0 10px;
  shadow-opacity: 0.37;
  shadow-radius: 13.16px;
  elevation: 12;
`;

export const Header = styled.View`
  align-items: flex-start;
  margin-left: 5%;
  margin-top: 15%;
`;

export const ImageStyle = styled.Image`
  margin-top: 5px;
  width: 90%;
  height: 80%;
  border-radius: 10px;
`;

export const LabelStyle = styled.Text`
  margin: 8px 0;
  font-size: 15px;
  font-weight: bold;
`;

export const MainView = styled.View`
  background-color: #e5e4e2;
  height: 100%;
`;

export const TxtStyle = styled.Text`
  text-align: left;
  margin-top: 50px;
  margin-left: 50px;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: bold;
`;

export const More = styled.Text`
  text-align: left;
  margin-top: 50px;
  margin-left: 70px;
  margin-bottom: 20px;
  font-size: 12px;
  align-self: center;
  color: tomato;
  font-weight: bold;
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
