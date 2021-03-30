import React from "react";
import { ScrollView } from "react-native";
import { CardContainer, Card, ImageStyle, LabelStyle } from "./styles";

export default function CategoriesCards({ categories }) {
  const categoriesList = categories.map((category) => (
    <Card>
      <ImageStyle
        source={{
          uri:
            "https://images.deliveryhero.io/image/talabat/MenuItems/Beef_burger_637140934410362990.jpg",
        }}
      />
      <LabelStyle>{category.name}</LabelStyle>
    </Card>
  ));
  return (
    <ScrollView horizontal contentContainerStyle={{ marginLeft: "8%" }}>
      <CardContainer>{categoriesList}</CardContainer>
    </ScrollView>
  );
}
