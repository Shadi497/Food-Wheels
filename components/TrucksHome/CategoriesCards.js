//React Imports
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";

//Actions
import { getTrucksByCategory } from "../../store/actions/categorytruckActions";

//Styles
import { CardContainer, Card, ImageStyle, LabelStyle } from "./styles";

export default function CategoriesCards({ categories }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const categoriesList = categories.map((category) => (
    <Card
      key={category.id}
      onPress={() => {
        dispatch(getTrucksByCategory(category.id)),
          navigation.navigate("CategoryTrucksList");
      }}
    >
      <ImageStyle source={{ uri: category.image }} />
      <LabelStyle>{category.name}</LabelStyle>
    </Card>
  ));
  return (
    <ScrollView horizontal contentContainerStyle={{ marginLeft: "8%" }}>
      <CardContainer>{categoriesList}</CardContainer>
    </ScrollView>
  );
}
