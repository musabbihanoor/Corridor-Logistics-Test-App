import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { SplashScreen } from "expo-splash-screen";

const Splash = ({ onFinish }) => {
  useEffect(() => {
    const init = async () => {
      try {
        // await SplashScreen.preventAutoHideAsync();
        onFinish();
      } catch (error) {
        console.warn(error);
      }
    };

    init();
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icons/logo.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default Splash;
