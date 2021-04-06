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
  margin-top: 12%;
`;

export const TruckImageStyle = styled.Image`
  align-self: center;
  width: 90%;
  height: 220px;
  border-radius: 30px;
  resize-mode: contain;
`;

export const ImgView = styled.View`
  margin-top: 10%;
  shadow-color: black;
  shadow-offset: 2px 10px;
  shadow-opacity: 0.37;
  shadow-radius: 13.16px;
  elevation: 5;
`;

export const LabelDetailStyle = styled.Text`
  color: #797979;
  font-size: 17px;
  text-align: center;
  margin-top: 4%;
`;

export const IconView = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 3%;
  margin-bottom: 3%;
  align-items: center;
`;

export const InfoView = styled.View`
  margin-top: 10%;
  margin-bottom: 10%;
  align-items: center;
`;
