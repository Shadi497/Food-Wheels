//React imports
import React, { useState } from "react";
import { ToastAndroid, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

//Actions imports
import { signin } from "../../store/actions/authActions";

//Styles
import {
  ButtonStyle,
  Signin,
  AuthTextInput,
  Errtext,
  LabelStyle,
  TxtInputIcon,
} from "./styles";

//Verification
import { Formik } from "formik";
import * as yup from "yup";

export default function SignIn() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const users = useSelector((state) => state.authReducer.user);
  const OnSubmit = async (event) => {
    event.preventDefault();
    await dispatch(signin(user));
    navigation.jumpTo("Home");
    if (users !== "null") {
      ToastAndroid.show(`Hi ${user.username} 👋`, ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView>
      <Signin>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values) => setUser(values)}
          validationSchema={yup.object().shape({
            username: yup.string().required("Please, provide your user name!"),
            password: yup
              .string()
              .min(8, "Password must be more than 8 chars.")
              .required("Password is required!"),
          })}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <View>
              <View
                style={{
                  marginBottom: 25,
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <LabelStyle>UserName</LabelStyle>
                <TxtInputIcon>
                  <Icon
                    type="font-awesome-5"
                    name="user-circle"
                    size={25}
                    color="#000"
                  />
                  <AuthTextInput
                    value={values.username}
                    onChangeText={handleChange("username")}
                    onBlur={() => setFieldTouched("username")}
                  />
                </TxtInputIcon>
                {touched.username && errors.username && (
                  <Errtext>{errors.username}</Errtext>
                )}
              </View>
              <View style={{ marginBottom: 25 }}>
                <LabelStyle>Password</LabelStyle>
                <TxtInputIcon>
                  <Icon type="entypo" name="lock" size={25} color="#000" />
                  <AuthTextInput
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={() => setFieldTouched("password")}
                    secureTextEntry={true}
                  />
                </TxtInputIcon>
                {touched.password && errors.password && (
                  <Errtext>{errors.password}</Errtext>
                )}
              </View>

              <ButtonStyle
                rounded
                title="Submit"
                color="tomato"
                disabled={!isValid}
                onPress={
                  user.username && user.password ? OnSubmit : handleSubmit
                }
              />
            </View>
          )}
        </Formik>
      </Signin>
    </ScrollView>
  );
}
