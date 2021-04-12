//React Imports
import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Image, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useSelector } from "react-redux";

//Components
import MarkerModal from "./MarkerModal";

//Styles
import { style } from "./styles";

export default function MapScreen() {
  const profile = useSelector(
    (state) => state.authReducer.profile && state.authReducer.profile.FoodTrucks
  );
  const location = useSelector((state) => state.authReducer.location);

  const [modalVisible, setModalVisible] = useState(false);
  const [favorite, setFavorite] = useState(null);

  const [region, setRegion] = useState({
    latitude: location.latitude,
    longitude: location.longitude,
    latitudeDelta: 0.15,
    longitudeDelta: 0.15,
  });
  const [mapLoaded, setMapLoaded] = useState(false);
  const onRegionChange = (region) => {
    setRegion(region);
  };

  useEffect(() => {
    setMapLoaded(true);
  }, [mapLoaded]);

  const handleSelectedMarker = (foodTruck) => {
    setFavorite(foodTruck);
    setModalVisible(true);
  };

  const favoriteMarker =
    profile &&
    profile.map((foodTruck) => (
      <Marker
        coordinate={{
          latitude: foodTruck && foodTruck.location.coordinates[1],
          longitude: foodTruck && foodTruck.location.coordinates[0],
        }}
        onPress={() => handleSelectedMarker(foodTruck)}
        title={foodTruck.name}
        key={foodTruck.id}
        style={style.marker}
      >
        <Image
          source={{
            uri: foodTruck.image,
          }}
          style={style.marker}
        />
      </Marker>
    ));

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
          provider={PROVIDER_GOOGLE}
          region={region}
          showsUserLocation={true}
          onRegionChangeComplete={onRegionChange}
        >
          {favoriteMarker}
        </MapView>
        <MarkerModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          foodTruck={favorite}
        />
      </>
    );
  }
}
