import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from "react-native";
import RNAnimated from "./lib/RNAnimated";
const staticData = [1, 2, 3, 4, 5, 6, 7, 1, 1, 4, 5, 31];

const App = () => {
  const renderItem = () => (
    <View
      key={Math.random()}
      style={{
        height: 50,
        width: 250,
        marginTop: 12,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text>Hello</Text>
    </View>
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#ccc",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RNAnimated
          appearFrom="right"
          animationDuration={1300}
          style={{ alignItems: "center" }}
        >
          {staticData.map((item) => renderItem())}
        </RNAnimated>
      </SafeAreaView>
    </>
  );
};

export default App;
