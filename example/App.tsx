import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import AppleHeader from "react-native-apple-header";
// import RNAnimated from "react-native-animated-component";
import RNAnimated, {
  AppearFrom,
  IRNAnimatedProps,
} from "./build/dist/RNAnimated";
import RNBounceable from "@freakycoder/react-native-bounceable";

const staticData = [
  "Quidditch",
  "Basketball",
  "Running",
  "Football",
  "Baseball",
  "Rugby",
  "Gymnastics",
  "Cycling",
  "Tennis",
  "Golf",
  "Soccer",
  "Yoga",
];

const App = () => {
  const renderItem = (data: any) => (
    <RNBounceable
      bounceEffect={0.97}
      key={Math.random()}
      style={{
        height: 50,
        width: 325,
        marginTop: 12,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        shadowRadius: 3,
        shadowOpacity: 0.2,
        shadowColor: "#757575",
        shadowOffset: {
          width: 0,
          height: 3,
        },
      }}
    >
      <Text>{data}</Text>
    </RNBounceable>
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <AppleHeader
          imageSource={{
            uri: "https://images.unsplash.com/photo-1551292831-023188e78222?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          }}
        />
        <RNAnimated
          appearFrom="bottom"
          animationDuration={1300}
          style={{ alignItems: "center" }}
        >
          {staticData.map((item) => renderItem(item))}
        </RNAnimated>
      </SafeAreaView>
    </>
  );
};

export default App;
