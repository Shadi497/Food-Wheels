import React from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Image } from "react-native";

const ImageBar = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{
          uri:
            "https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png",
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginLeft: 15,
        }}
      />
    </View>
  );
};

export default ImageBar;
