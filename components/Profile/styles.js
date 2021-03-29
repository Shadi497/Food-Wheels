import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const MainView = styled.View`
  background-color: #e5e4e2;
  height: 100%;
`;

export const InfoView = styled.View`
  flex-direction: column;
  margin-left: 5%;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-left: 5%;
  margin-top: 15%;
  width: 205%;
`;

export const HeaderTxt = styled.Text`
  margin-left: 13%;
  font-weight: bold;
  font-size: 20px;
`;

export const TxtStyle = styled.Text`
  text-align: left;
  margin-top: 50px;
  margin-left: 50px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const Card = styled.TouchableOpacity`
  background-color: white;
  flex-direction: row;
  align-self: center;
  margin-bottom: 8%;
  border-radius: 10px;
  width: 80%;
  height: 120px;
  shadow-color: #000;
  shadow-offset: 0 10px;
  shadow-opacity: 0.37;
  shadow-radius: 13.16px;
  elevation: 12;
  align-items: center;
`;

export const LabelStyle = styled.Text`
  margin-left: 8px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 7%;
`;

export const InfoStyle = styled.Text`
  margin-left: 8px;
  font-size: 14px;
  color: gray;
  margin-top: 5%;
`;

export const TxtInputIcon = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  width: 120px;
  border-bottom-width: 1px;
  font-weight: bold;
  margin-left: 5%;
`;

export const HeaderLabel = styled.Text`
  font-size: 12px;
  margin-left: 15%;
  color: gray;
`;

export const ModalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "70%",
    height: "60%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
