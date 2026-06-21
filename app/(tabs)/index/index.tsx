//References available at page end

import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MOVIES } from "../../../data/moviedata";

const MainPage = () => {
  //const {id} = useLocalSearchParams<{id: string}>();
  //const movie = MOVIES.find((movie) => movie.code === id);
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
        <Pressable style={styles.navBarTextContainerActive}>
          <Text style={styles.navBarTextActive}>Films</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("reviews")}
          style={styles.navBarTextContainer}
        >
          <Text style={styles.navBarText}>Reviews</Text>
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

      <View style={styles.sectionContainer}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitleText}>Popular this week</Text>
        </View>
        <Text style={styles.sectionTitleArrow}>{" > "}</Text>
      </View>

      <FlatList
        data={MOVIES.slice(0, 9)}
        keyExtractor={(item) => item.code}
        numColumns={3}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <Pressable
            style={styles.popularMoviesBtn}
            onPress={() => router.push(`/${item.code}`)}
          >
            <Image
              source={{ uri: item.posterImage }}
              style={styles.popularMoviesImage}
            />
          </Pressable>
        )}
      />

      <View style={styles.sectionContainer}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitleText}>Letterboxd Video Store</Text>
          <Text style={styles.sectionSubtitleText}>
            No late fees. Just late night discoveries.
          </Text>
        </View>
        <Text style={styles.sectionTitleArrow}>{" > "}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.videoStoreMoviesContainer}
      >
        {MOVIES.map((movie) => (
          <Pressable
            key={movie.code}
            onPress={() => router.push(`/${movie.code}`)}
          >
            <Image
              source={{ uri: movie.posterImage }}
              style={styles.videoStoreMoviesImage}
            />
          </Pressable>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default MainPage;

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
  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    paddingTop: 15,
    paddingLeft: 19,
    paddingBottom: 5,
  },
  sectionTitleContainer: {
    flexDirection: "column",
  },
  sectionTitleText: {
    fontSize: 16,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
  },
  sectionSubtitleText: {
    fontSize: 14,
    fontFamily: "Arial",
    color: "#7d858c",
    textAlign: "left",
  },
  sectionTitleArrow: {
    fontSize: 16,
    fontFamily: "Arial",
    color: "#7d858c",
    alignSelf: "center",
  },
  popularMoviesContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    flexGrow: 0,
    marginBottom: 10,
  },
  popularMoviesBtn: {
    width: "30%",
    aspectRatio: 2 / 3,
    margin: 4,
  },
  popularMoviesImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  videoStoreMoviesContainer: {
    flexGrow: 0,
  },
  videoStoreMoviesImage: {
    width: 90,
    aspectRatio: 2 / 3,
    borderRadius: 8,
    margin: 4,
  },
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
