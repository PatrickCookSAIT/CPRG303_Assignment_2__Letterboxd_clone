//References available at page end

import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MOVIES } from "../../data/moviedata";

const MainPage = () => {
  //const {id} = useLocalSearchParams<{id: string}>();
  //const movie = MOVIES.find((movie) => movie.code === id);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Letterboxd</Text>
      </View>
      <View style={styles.navBar}>
        <View style={styles.navBarTextContainerActive}>
          <Text style={styles.navBarTextActive}>Films</Text>
        </View>
        <View style={styles.navBarTextContainer}>
          <Text style={styles.navBarText}>Reviews</Text>
        </View>
        <View style={styles.navBarTextContainer}>
          <Text style={styles.navBarText}>Lists</Text>
        </View>
        <View style={styles.navBarTextContainer}>
          <Text style={styles.navBarText}>Journal</Text>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitleText}>Popular this week</Text>
        </View>
        <Text style={styles.sectionTitleArrow}>{" > "}</Text>
      </View>

      <FlatList
        style={styles.popularMoviesContainer}
        //restrict number of movies shown here to 9
        data={MOVIES.slice(0, 9)}
        keyExtractor={(item) => item.code}
        numColumns={3}
        scrollEnabled={false}
        contentContainerStyle={styles.popularMoviesContainer}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.posterImage }}
            style={styles.popularMoviesImage}
          />
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
        style={styles.videoStoreMoviesContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {MOVIES.map((movie) => (
          <Image
            key={movie.code}
            source={{ uri: movie.posterImage }}
            style={styles.videoStoreMoviesImage}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
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
  },
  popularMoviesImage: {
    width: "30%",
    aspectRatio: 2 / 3,
    borderRadius: 8,
    margin: 4,
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
