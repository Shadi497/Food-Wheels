import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
export default function MapScreen({ navigation }) {
  const location = useSelector((state) => state.authReducer.location);
  const [region, setRegion] = useState({
    latitude: location.latitude,
    longitude: location.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [mapLoaded, setMapLoaded] = useState(false);
  const onRegionChange = (region) => {
    setRegion(region);
  };
  useEffect(() => {
    setMapLoaded(true);
  }, [mapLoaded]);

  if (!mapLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else if (region !== null && mapLoaded) {
    return (
      <>
        <MapView
          style={{ flex: 1 }}
          region={region}
          showsUserLocation={true}
          onRegionChangeComplete={onRegionChange}
        >
          <Marker
            coordinate={{
              latitude: 26.413549197719615,
              longitude: 50.07087707519531,
            }}
            
          >
            <Image
              source={{
                uri:
                  "https://cdn2.iconfinder.com/data/icons/modifiers-add-on-1-colored/48/JD-34-512.png",
              }}
              style={style.marker}
            />
            <Text style={{ width: 0, height: 0 }}>{Math.random()}</Text>
          </Marker>
        </MapView>
        <View>
          <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
      </>
    );
  }
}

const style = StyleSheet.create({
  marker: {
    width: 30,
    height: 30,
  },
});
