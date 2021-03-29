import React from "react";
import { Modal, View, Text, Pressable } from "react-native";
import { Icon } from "react-native-elements";

//Styles
import {
  ModalStyles,
  AuthTextInput,
  TxtInputIcon,
  HeaderLabel,
} from "./styles";

export default function UpdateModal({ modalVisible, setModalVisible }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={ModalStyles.centeredView}>
        <View style={ModalStyles.modalView}>
          <View
            style={{
              marginBottom: 25,
            }}
          >
            <HeaderLabel>First Name</HeaderLabel>
            <TxtInputIcon>
              <Icon
                type="material-community"
                name="shield-account"
                size={25}
                color="#000"
              />
              <AuthTextInput
              // value={values.username}
              // onChangeText={handleChange("username")}
              // onBlur={() => setFieldTouched("username")}
              />
            </TxtInputIcon>
          </View>
          <View
            style={{
              marginBottom: 25,
            }}
          >
            <HeaderLabel>Email</HeaderLabel>
            <TxtInputIcon>
              <Icon
                type="material-community"
                name="email"
                size={25}
                color="#000"
              />
              <AuthTextInput
                // value={values.email}
                // onChangeText={handleChange("email")}
                // onBlur={() => setFieldTouched("email")}
                keyboardType="email-address"
              />
            </TxtInputIcon>
          </View>
          <View
            style={{
              marginBottom: 25,
            }}
          >
            <HeaderLabel>Phone Number</HeaderLabel>
            <TxtInputIcon>
              <Icon type="font-awesome" name="phone" size={25} color="#000" />
              <AuthTextInput
                // value={values.email}
                // onChangeText={handleChange("email")}
                // onBlur={() => setFieldTouched("email")}
                keyboardType="phone-pad"
              />
            </TxtInputIcon>
          </View>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
