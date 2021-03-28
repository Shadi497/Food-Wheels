import styled from "styled-components/native";

export const CardContainer = styled.View`
  justify-content: center;
  flex-direction: row;
`;
export const Card = styled.View`
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

export const TruckCard = styled.View`
  background-color: white;
  flex-direction: row;
  margin-left: 25px;
  margin-bottom: 25px;
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
  margin-top: 15%;
`;

export const TruckImageStyle = styled.Image`
  margin-left: 15px;
  width: 35%;
  height: 70%;
  border-radius: 10px;
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
  font-size: 25px;
  font-weight: bold;
`;