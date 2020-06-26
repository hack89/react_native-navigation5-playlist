import React from "react";
import { Button, SafeAreaView } from "react-native";

export default ({ navigation }) => (
  <SafeAreaView style={{ marginTop: 30 }}>
    <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
    <Button
      title="To actions"
      onPress={() => {
        navigation.navigate("Tabs", { screen: "Actions" });
      }}
    />
  </SafeAreaView>
);
