import { Button, Text } from "native-base";
import styled from "styled-components/native";

export const SignButtonStyle = styled(Button)`
  margin: 6% 0 10% 34%;
  width: 30%;
  align-items: center;
  justify-content: center;
  border-radius: 250px;
`;

export const ButtonStyle = styled.Button`
  margin: 60% 15% 10% 34%;
  align-items: center;
  justify-content: center;
  border-radius: 250px;
`;

export const Signin = styled.View`
  margin-top: 15%;
  margin-left: 14%;
  width: 70%;
  align-items: center;
`;
export const Signup = styled.View`
  margin-top: 11%;
  margin-bottom: 11%;

  margin-left: 14%;
  width: 70%;
  align-items: center;
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
  width: 200px;
  border-bottom-width: 1px;
  font-weight: bold;
  margin-left: 5%;
`;

export const LabelStyle = styled.Text`
  font-size: 12px;
  margin-left: 15%;
  color: gray;
`;

export const Errtext = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: #ff0d10;
  text-align: center;
`;

export const TxtLast = styled.Text`
  margin-top: 25px;
  margin-bottom: 45px;
  align-self: center;
`;

export const IndexView = styled.View`
  background-color: white;
`;

export const IndexImage = styled.Image`
  width: 170px;
  height: 90px;
  margin-top: 18%;
  margin-bottom: 9%;
  border-radius: 20px;
  align-self: center;
`;
