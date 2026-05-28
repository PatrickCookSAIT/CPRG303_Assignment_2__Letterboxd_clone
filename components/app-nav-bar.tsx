import React from "react";
import { StyleSheet, View } from "react-native";
//importing icons for navbar
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons
} from "@expo/vector-icons";

const AppNavBar = () => {
  return (
    <View style={styles.appNavBar}>
      <View style={styles.appNavBarIconsSelectedContainer}>
        <MaterialCommunityIcons
          name="view-carousel-outline"
          style={styles.appNavBarIconsSelectedText}
        />
      </View>
      <View style={styles.appNavBarIconsContainer}>
        <Feather name="search" style={styles.appNavBarIconsText} />
      </View>
      <View style={styles.appNavBarIconsContainer}>
        <Ionicons
          name="add-circle-outline"
          style={styles.appNavBarIconsPlusSignText}
        />
      </View>
      <View style={styles.appNavBarIconsContainer}>
        <Ionicons name="flash-outline" style={styles.appNavBarIconsText} />
      </View>
      <View style={styles.appNavBarIconsContainer}>
        <Ionicons name="person-outline" style={styles.appNavBarIconsText} />
      </View>
    </View>
  );
};

export default AppNavBar;

const styles = StyleSheet.create({
  appNavBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#445565",
    width: "100%",
    height: "12%",
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  appNavBarIconsContainer: {
    borderRadius: 20,
    height: "35%",
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },
  appNavBarIconsSelectedContainer: {
    backgroundColor: "#334454",
    borderRadius: 20,
    height: "35%",
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
  },
  appNavBarIconsText: {
    color: "#fff",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 25,
    fontWeight: "900",
  },
  appNavBarIconsSelectedText: {
    color: "#46b8fd",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 25,
    fontWeight: "900",
  },
  appNavBarIconsPlusSignText: {
    color: "#14ce66",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 25,
    fontWeight: "900",
  },
});
