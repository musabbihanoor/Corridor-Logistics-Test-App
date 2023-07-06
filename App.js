import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import store from "./src/store";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigator/TabNavigator";

const App = () => {
  return (
    <Provider store={store}>
      {/* <View style={styles.container}>
        <Text>See I am working!</Text>
        <StatusBar style="auto" />
      </View> */}
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
