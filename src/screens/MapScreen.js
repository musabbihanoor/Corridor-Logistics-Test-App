import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { connect } from "react-redux";
import { fetchVenues } from "../actions/venueActions";

const MapScreen = ({ venues, loading, error, fetchVenues }) => {
  useEffect(() => {
    fetchVenues();
  }, [fetchVenues]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 25.2009,
          longitude: 55.2763,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {venues.length > 0 &&
          venues.map((x, i) => (
            <Marker
              key={i}
              coordinate={{ latitude: x.lat, longitude: x.lon }}
              title={x.name}
              description={x.address}
            >
              <Image
                source={{ uri: x.featured_image }}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  borderColor: "red",
                  borderWidth: 3,
                }}
              />
            </Marker>
          ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  venues: state.venues.venues,
  loading: state.venues.loading,
  error: state.venues.error,
});

export default connect(mapStateToProps, { fetchVenues })(MapScreen);
