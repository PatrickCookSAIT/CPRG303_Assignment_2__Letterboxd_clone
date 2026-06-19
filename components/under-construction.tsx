import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UnderConstruction = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This Page is currently under construction</Text>
    </View>
  );
};

export default UnderConstruction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#181b20",
  },

  text: {
    fontSize: 16,
    fontFamily: "Arial",
    fontWeight: "800",
    color: "#a2a9af",
    marginTop: 1,
    marginBottom: 10,
  },
});
