import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import VenueCards from "../components/VenueCards";

import { useNavigation } from "@react-navigation/native";

import { connect } from "react-redux";
import { fetchVenues, setVenue } from "../actions/venueActions";

const HomeScreen = ({ venues, loading, error, fetchVenues, setVenue }) => {
  const navigation = useNavigation();

  const onSelect = (item) => {
    setVenue(item);
    navigation.navigate("Details");
  };

  useEffect(() => {
    fetchVenues();
  }, [fetchVenues]);

  return (
    <View>
      <VenueCards data={venues} onSelect={onSelect} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  venues: state.venues.venues,
  loading: state.venues.loading,
  error: state.venues.error,
});

export default connect(mapStateToProps, { fetchVenues, setVenue })(HomeScreen);
