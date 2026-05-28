import React from "react";
import { StyleSheet, Text, View } from "react-native";
//importing icons for navbar
import { BsLightningCharge } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GoPlusCircle } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
//current best approximation for the cascading rectangle from letterboxd
import { HiRectangleStack } from "react-icons/hi2";

const AppNavBar = () => {
  return (
    <View style={styles.appNavBar}>
      <View style={styles.appNavBarIconsSelectedContainer}>
        <Text style={styles.appNavBarIconsSelectedText}>
          <HiRectangleStack />
        </Text>
      </View>
      <View style={styles.appNavBarIconsContainer}>
        <Text style={styles.appNavBarIconsText}>
          <CiSearch />
        </Text>
      </View>
      <View style={styles.appNavBarIconsContainer}>
        <Text style={styles.appNavBarIconsPlusSignText}>
          <GoPlusCircle />
        </Text>
      </View>
      <View style={styles.appNavBarIconsContainer}>
        <Text style={styles.appNavBarIconsText}>
          <BsLightningCharge />
        </Text>
      </View>
      <View style={styles.appNavBarIconsContainer}>
        <Text style={styles.appNavBarIconsText}>
          <IoPersonOutline />
        </Text>
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
