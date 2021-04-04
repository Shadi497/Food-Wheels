import styled from "styled-components/native";

export const Search = styled.View`
  width: 70%;
  height: 50px;
  margin-top: 12%;
  margin-bottom: 9%;
  padding-left: 5%;
  align-items: center;
  align-self: center;
  flex-direction: row;
  background-color: #d3d3d3;
  border-radius: 25px;
`;

export const MainView = styled.View`
  background-color: #e5e4e2;
  height: 100%;
`;

export const TruckCard = styled.TouchableOpacity`
  background-color: white;
  flex-direction: row;
  align-self: center;
  margin-bottom: 8%;
  border-radius: 10px;
  width: 85%;
  height: 90px;
  shadow-color: #000;
  shadow-offset: 0 10px;
  shadow-opacity: 0.37;
  shadow-radius: 13.16px;
  elevation: 12;
  align-items: center;
`;

export const Header = styled.View`
  align-items: flex-start;
  margin-left: 5%;
  margin-top: 15%;
`;

export const MiniListView = styled.View`
  flex-direction: column;
  display: flex;
  margin-bottom: 10%;
`;

export const ListView = styled.View`
  flex-direction: column;
  display: flex;
  margin-bottom: 10%;
`;

export const NullView = styled.View`
  margin-top: 13%;
`;

export const TruckImageStyle = styled.Image`
  margin-left: 15px;
  width: 35%;
  height: 70%;
  border-radius: 10px;
`;

export const LabelStyle = styled.Text`
  margin-top: 7%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const FoundText = styled.Text`
  margin-top: 3%;
  margin-bottom: 8%;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const TruckLabelStyle = styled.Text`
  margin-left: 8px;
  font-size: 15px;
  font-weight: bold;
`;

export const LabelDetailStyle = styled.Text`
  color: #797979;
  font-size: 15px;
  text-align: center;
  margin-top: 4%;
`;
