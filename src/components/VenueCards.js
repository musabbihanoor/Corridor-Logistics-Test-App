import React, { useRef, useState } from "react";
import { View, Text, ScrollView } from "react-native";
// import Carousel, { Pagination } from "react-native-snap-carousel";
import VenueCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./VenueCardItem";

const VenueCards = ({ data, onSelect }) => {
  // const isCarousel = useRef(null);
  // const [index, setIndex] = useState(0);

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 50,
      }}
    >
      <Text
        style={{
          alignSelf: "flex-start",
          fontSize: 28,
          fontWeight: "700",
          marginBottom: 10,
          paddingLeft: 20,
        }}
      >
        Visit our Venues
      </Text>
      <ScrollView horizontal style={{ paddingLeft: 20 }}>
        {data.map((x, i) => (
          <VenueCardItem item={x} key={i} onSelect={onSelect} />
        ))}
      </ScrollView>
      {/* <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={({ item }) => (
          <VenueCardItem item={item} onSelect={onSelect} />
        )}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
      /> */}
      {/* <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "#0492c2",
        }}
        inactiveDotStyle={{
          backgroundColor: "grey",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      /> */}
    </View>
  );
};

export default VenueCards;
