//React Imports
import React from "react";
import { ScrollView, Modal, View } from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";

//Actions
import { profileEdit } from "../../store/actions/authActions";

//Styles
import {
  ModalStyles,
  AuthTextInput,
  TxtInputIcon,
  HeaderLabel,
  EditLabel,
  EView,
} from "./styles";

export default function UpdateModal({
  user,
  setUser,
  modalVisible,
  setModalVisible,
}) {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(profileEdit(user));
    setModalVisible(!modalVisible);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={ModalStyles.centeredView}>
        <View style={ModalStyles.modalView}>
          <ScrollView>
            <EditLabel>Edit Profile</EditLabel>
            <EView>
              <HeaderLabel>First Name</HeaderLabel>
              <TxtInputIcon>
                <Icon
                  type="material-community"
                  name="shield-account"
                  size={25}
                  color="#000"
                />
                <AuthTextInput
                  value={user.firstName}
                  onChangeText={(firstName) => setUser({ ...user, firstName })}
                />
              </TxtInputIcon>
            </EView>
            <EView>
              <HeaderLabel>Last Name</HeaderLabel>
              <TxtInputIcon>
                <Icon
                  type="material-community"
                  name="shield-account"
                  size={25}
                  color="#000"
                />
                <AuthTextInput
                  value={user.lastName}
                  onChangeText={(lastName) => setUser({ ...user, lastName })}
                />
              </TxtInputIcon>
            </EView>
            <EView>
              <HeaderLabel>Email</HeaderLabel>
              <TxtInputIcon>
                <Icon
                  type="material-community"
                  name="email"
                  size={25}
                  color="#000"
                />
                <AuthTextInput
                  value={user.email}
                  onChangeText={(email) => setUser({ ...user, email })}
                  keyboardType="email-address"
                />
              </TxtInputIcon>
            </EView>
            <EView>
              <HeaderLabel>Phone Number</HeaderLabel>
              <TxtInputIcon>
                <Icon type="font-awesome" name="phone" size={25} color="#000" />
                <AuthTextInput
                  value={user.phoneNumber}
                  onChangeText={(phoneNumber) =>
                    setUser({ ...user, phoneNumber })
                  }
                  keyboardType="phone-pad"
                />
              </TxtInputIcon>
            </EView>
            <Button
              mode="contained"
              style={{
                width: "50%",
                alignSelf: "center",
                height: "10%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "tomato",
                borderRadius: 25,
              }}
              uppercase={false}
              labelStyle={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
              }}
              icon="circle-edit-outline"
              onPress={handleSubmit}
            >
              Edit
            </Button>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
