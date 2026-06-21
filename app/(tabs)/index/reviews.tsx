import UnderConstruction from "@/components/under-construction";
import { router } from "expo-router";
import React from "react";
import {
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";

const reviews = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Letterboxd</Text>
      </View>

      <View style={styles.navBar}>
        <Pressable
          onPress={() => router.push("/")}
          style={styles.navBarTextContainer}
        >
          <Text style={styles.navBarText}>Films</Text>
        </Pressable>
        <Pressable style={styles.navBarTextContainerActive}>
          <Text style={styles.navBarTextActive}>Reviews</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("lists")}
          style={styles.navBarTextContainer}
        >
          <Text style={styles.navBarText}>Lists</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("journal")}
          style={styles.navBarTextContainer}
        >
          <Text style={styles.navBarText}>Journal</Text>
        </Pressable>
      </View>
      <UnderConstruction />
    </ScrollView>
  );
};

export default reviews;

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#181b20",
    paddingTop: StatusBar.currentHeight,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#000000",
  },
  headerText: {
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "#fff",
    alignItems: "center",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#000000",
  },
  navBarTextContainer: {
    width: "25%",
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
    alignItems: "center",
  },
  navBarTextContainerActive: {
    width: "25%",
    borderBottomWidth: 3,
    borderBottomColor: "#10d659",
    alignItems: "center",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  navBarText: {
    color: "#7d858c",
    fontSize: 12,
    fontFamily: "Arial",
    padding: 10,
  },
  navBarTextActive: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Arial",
    padding: 10,
  },
});
