import styled from "styled-components/native";

export const MainView = styled.View`
  background-color: #e5e4e2;
  height: 100%;
`;

export const Header = styled.View`
  align-items: flex-start;
  margin-left: 5%;
  margin-top: 18%;
  flex-direction: row;
`;

export const ImageStyle = styled.Image`
  margin-top: 5px;
  width: 90%;
  height: 80%;
  border-radius: 10px;
`;

export const TruckNameStyle = styled.Text`
  align-self: center;
  font-size: 25px;
  font-weight: bold;
  margin-top: 4%;
`;

export const OpenTxtStyle = styled.Text`
  align-self: center;
  font-size: 18px;
  font-weight: bold;
`;

export const OpenHStyle = styled.Text`
  align-self: center;
  font-size: 13px;
  margin-right: 5%;
`;

export const MenuStyle = styled.Text`
  font-size: 15px;
  margin: 5% 0 2% 0;
  font-weight: bold;
  color: #696969;
`;

export const SubMenuStyle = styled.Text`
  align-self: center;
  font-size: 17px;
  font-weight: bold;
`;

export const OpenStyle = styled.View`
  flex-direction: row;
  margin-top: 4%;
  justify-content: center;
`;

export const TruckItemStyle = styled.Image`
  width: 25%;
  height: 85%;
  border-radius: 10px;
  resize-mode: contain;
  align-self: auto;
`;

export const TruckImageStyle = styled.Image`
  align-self: center;
  width: 90%;
  height: 220px;
  border-radius: 30px;
  resize-mode: contain;
`;

export const ImgView = styled.View`
  margin-top: 2%;
  shadow-color: black;
  shadow-offset: 2px 10px;
  shadow-opacity: 0.37;
  shadow-radius: 13.16px;
  elevation: 5;
`;

export const OpenView = styled.View`
  flex-direction: column;
  margin-top: 4%;
  margin-bottom: 3%;
  justify-content: center;
`;

export const MenuImageView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  margin-top: 4%;
  width: 80%;
  border-bottom-color: #c0c0c0;
  border-bottom-width: 1px;
`;

export const MenuView = styled.View`
  flex-direction: column;
  align-self: center;
  width: 50%;
`;

export const OpenPressView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 6%;
  margin-bottom: 4%;
`;

export const LabelDetailStyle = styled.Text`
  color: #797979;
  font-size: 17px;
  text-align: center;
  margin-top: 4%;
`;

export const IconView = styled.TouchableOpacity`
  align-items: center;
`;

export const InfoView = styled.View`
  margin-top: 7%;
  margin-bottom: 3%;
  width: 40%;
  justify-content: space-evenly;
  align-self: center;
  flex-direction: row;
`;
