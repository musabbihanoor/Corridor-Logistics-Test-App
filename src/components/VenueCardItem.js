import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const VenueCardItem = ({ item, index, onSelect }) => {
  return (
    <View style={styles.container} key={index}>
      <View>
        <Image source={{ uri: item.featured_image }} style={styles.image} />
        <Text style={styles.header}>{item.name}</Text>
        <Text style={styles.body}>{item.address}</Text>
      </View>
      <TouchableOpacity onPress={() => onSelect(item)}>
        <Text style={styles.btn}>View More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingTop: 15,
  },
  body: {
    color: "#222",
    fontSize: 14,
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    paddingHorizontal: 15,
    alignSelf: "flex-end",
    textDecorationLine: "underline",
    fontSize: 12,
  },
});

export default VenueCardItem;
