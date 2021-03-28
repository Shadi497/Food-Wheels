import React from "react";
import { ScrollView } from "react-native";
import { CardContainer, Card, ImageStyle, LabelStyle } from "./styles";

export default function CategoriesCards() {
  return (
    <ScrollView horizontal contentContainerStyle={{ marginLeft: "8%" }}>
      <CardContainer>
        <Card>
          <ImageStyle
            source={{
              uri:
                "https://images.deliveryhero.io/image/talabat/MenuItems/Beef_burger_637140934410362990.jpg",
            }}
          />
          <LabelStyle>Burger</LabelStyle>
        </Card>

        <Card>
          <ImageStyle
            source={{
              uri:
                "https://www.gannett-cdn.com/-mm-/00328455916bb45ca99246179b52b99baca14f7b/c=0-0-642-361/local/-/media/2018/04/11/USATODAY/usatsports/Reviewed.com-RvEW-21566-Untitled_design__82_.png",
            }}
          />
          <LabelStyle>Fries</LabelStyle>
        </Card>

        <Card>
          <ImageStyle
            source={{
              uri:
                "https://www.luxurybigisland.com/wp-content/uploads/2019/10/3-Fine-Dining-Dessert-Recommendations-on-the-Big-Island.jpg",
            }}
          />
          <LabelStyle>Deserts</LabelStyle>
        </Card>

        <Card>
          <ImageStyle
            source={{
              uri: "https://dev.rodpub.com/images/102/819_main.jpg",
            }}
          />
          <LabelStyle>Beverages</LabelStyle>
        </Card>
      </CardContainer>
    </ScrollView>
  );
}
