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

export const TruckLabelStyle = styled.Text`
  margin-left: 8px;
  font-size: 15px;
  font-weight: bold;
`;

export const TxtStyle = styled.Text`
  text-align: left;
  margin-top: 50px;
  margin-left: 50px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const TruckImageStyle = styled.Image`
  margin-left: 15px;
  width: 35%;
  height: 70%;
  border-radius: 10px;
`;

export const TruckCard = styled.TouchableOpacity`
  background-color: white;
  flex-direction: row;
  align-self: center;
  margin-bottom: 8%;
  border-radius: 10px;
  width: 55%;
  height: 55px;
  shadow-color: #000;
  shadow-offset: 0 10px;
  shadow-opacity: 0.37;
  shadow-radius: 13.16px;
  elevation: 12;
  align-items: center;
  justify-content: center;
`;

export const MiniListView = styled.View`
  flex-direction: column;
  display: flex;
  margin-bottom: 10%;
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

export const NameStyle = styled.Text`
  margin-left: 8px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 3%;
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

export const EView = styled.View`
  margin-bottom: 15%;
`;

export const AuthTextInput = styled.TextInput`
  text-align: left;
  height: 120%;
  width: 75%;
  border-bottom-width: 1px;
  font-weight: bold;
  margin-left: 5%;
`;

export const HeaderLabel = styled.Text`
  font-size: 12px;
  margin-left: 20%;
  color: gray;
`;

export const EditLabel = styled.Text`
  font-size: 22px;
  align-self: center;
  font-weight: bold;
  margin-bottom: 15%;
`;

export const NullView = styled.View`
  margin-top: 4%;
`;

export const LabelStyle = styled.Text`
  margin-top: 4%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #696969;
`;

export const ModalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "70%",
    height: "80%",
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
});
