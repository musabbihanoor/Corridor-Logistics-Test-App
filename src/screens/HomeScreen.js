import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import VenueCards from "../components/VenueCards";

import { useNavigation } from "@react-navigation/native";

import { connect } from "react-redux";
import { fetchVenues } from "../actions/venueActions";

const HomeScreen = ({ venues, loading, error, fetchVenues }) => {
  const navigation = useNavigation();

  useEffect(() => {
    fetchVenues();
  }, [fetchVenues]);

  return (
    <View>
      <VenueCards data={venues} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  venues: state.venues.venues,
  loading: state.venues.loading,
  error: state.venues.error,
});

export default connect(mapStateToProps, { fetchVenues })(HomeScreen);
