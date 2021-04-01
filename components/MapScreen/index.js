import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Button } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
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
        />
        <View>
          <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
      </>
    );
  }
}
