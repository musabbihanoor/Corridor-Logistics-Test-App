import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { connect } from "react-redux";

import MapView, { Marker } from "react-native-maps";

const DetailsScreen = ({
  venue: {
    name,
    address,
    facilities,
    checkin_instructions,
    review_count,
    average_rating,
    lat,
    lon,
  },
}) => {
  return (
    <ScrollView>
      <MapView
        style={{ height: 300 }}
        initialRegion={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        <Marker
          coordinate={{ latitude: lat, longitude: lon }}
          title={name}
          description={address}
        />
      </MapView>

      <View style={{ padding: 30 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 10 }}>
          {name}
        </Text>
        <Text style={{ fontStyle: "italic", marginBottom: 10 }}>{address}</Text>
        <Text style={{ marginTop: 10 }}>Reviews: {review_count}</Text>
        <Text style={{ marginBottom: 10 }}>Ratings: {average_rating}</Text>
        <Text style={{ fontSize: 18, fontWeight: "700", marginVertical: 10 }}>
          Facilities:
        </Text>
        <View>
          {facilities.map((x, i) => (
            <View
              key={i}
              style={{
                alignItems: "center",
                backgroundColor: "#fff",
                marginVertical: 5,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={{ uri: x.icon }}
                style={{ width: 20, height: 20 }}
              />
              <Text>{x.name}</Text>
            </View>
          ))}
        </View>
        <Text style={{ fontSize: 12, marginTop: 20 }}>
          Special Instructions: {checkin_instructions}
        </Text>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  venue: state.venues.venue,
});

export default connect(mapStateToProps, {})(DetailsScreen);
