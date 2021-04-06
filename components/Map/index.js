import { StyleSheet, View, Dimensions } from "react-native";
import React, { useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { Platform } from "react-native";
import { Linking } from "react-native";
import { useSelector } from "react-redux";

export default function Map() {
  const truckDetail = useSelector((state) => state.trucksReducer.truckDetail);

  const _map = useRef(null);
  const lat = `26.263528`;
  const long = "50.594639";
  const label = "Custom Label";
  const scheme = Platform.select({
    ios: "maps:0,0?q=",
    android: "geo:0,0?q=",
  });
  const url = Platform.select({
    ios: `https://maps.google.com/?q=${lat},${long}`,
    android: `${scheme}${lat},${long}(${label})`,
  });

  const Maps = () => Linking.openURL(url);

  const setMapReady = () => {
    if (_map.current) {
      _map.current.fitToCoordinates(
        [
          {
            latitude: 26.263528,
            longitude: 50.594639,
          },
        ],
        {
          animated: true,
        }
      );
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={_map}
        onMarkerPress={Maps}
        onMapReady={setMapReady}
        maxZoomLevel={20}
        // mapType="satellite"
        zoomEnabled={true}
        showsTraffic={true}
        toolbarEnabled={true}
        loadingEnabled={true}
      >
        <Marker
          coordinate={{ latitude: 26.263528, longitude: 50.594639 }}
          title={truckDetail.name}
          description={"26.263528, 50.594639"}
        />
      </MapView>
    </View>
  );
}

const { width, height } = Dimensions.get("window");
const halfHeight = height / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e4e2",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width,
    height: halfHeight,
  },
});
