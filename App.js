import { useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import store from "./src/store";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigator/TabNavigator";

import Splash from "./src/screens/SplashScreen";

const App = () => {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);

  const handleSplashScreenFinish = useCallback(() => {
    setSplashScreenVisible(false);
  }, []);

  useEffect(() => {
    setTimeout(handleSplashScreenFinish, 3000);
  }, [handleSplashScreenFinish]);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {splashScreenVisible ? (
          <Splash onFinish={handleSplashScreenFinish} />
        ) : (
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        )}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
