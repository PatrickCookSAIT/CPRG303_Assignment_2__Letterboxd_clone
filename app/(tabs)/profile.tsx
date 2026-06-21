import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MOVIES } from "../../data/moviedata";
import { USERS } from "../../data/userpagedata";

const Profile = () => {
  const user = USERS.find((u) => u.code === "PatrickCook");
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Ionicons style={styles.headerGear} name="settings-outline" />

        <Text style={styles.headerText}>{user?.name}</Text>
      </View>

      <View style={styles.navBar}>
        <View style={styles.navBarTextContainerActive}>
          <Text style={styles.navBarTextActive}>Profile</Text>
        </View>
        <View style={styles.navBarTextContainer}>
          <Text style={styles.navBarText}>Diary</Text>
        </View>
        <View style={styles.navBarTextContainer}>
          <Text style={styles.navBarText}>Lists</Text>
        </View>
        <View style={styles.navBarTextContainer}>
          <Text style={styles.navBarText}>Watch</Text>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.profilePictureContainer}>
          <Image
            style={styles.profilePicture}
            source={{
              uri: user?.userPFP,
            }}
          ></Image>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.recentActivityTitleContainer}>
          <Text style={styles.recentActivityTitle}>RECENT ACTIVITY</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.recentActivityMoviesContainer}
        >
          {user?.recentActivity.map((activity) => {
            const movie = MOVIES.find((m) => m.code === activity.movieCode);

            if (!movie) return null;

            return (
              <View
                style={styles.recentActivityMoviesandStarsContainer}
                key={activity.movieCode}
              >
                <Image
                  source={{ uri: movie.posterImage }}
                  style={styles.recentActivityMoviesImage}
                />
                <Text style={styles.recentActivityMoviesStars}>
                  {"★".repeat(activity.movieRating)}
                </Text>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.moreActivityContainer}>
          <Text style={styles.moreActivityTitle}>More activity</Text>
          <View style={styles.moreActivityArrowContainer}>
            <Text style={styles.moreActivityArrowText}> {" > "} </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

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
    padding: 15,
    backgroundColor: "#000000",
  },
  headerGear: {
    color: "#fff",
    fontSize: 20,
    marginRight: 5,
  },
  headerText: {
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "#fff",
    alignItems: "flex-start",
    paddingTop: 1,
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
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#445565",
    flexDirection: "column",
    paddingLeft: 5,
    paddingRight: 5,
  },
  profilePictureContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  profilePicture: {
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: "center",
  },
  recentActivityTitleContainer: {
    marginLeft: 5,
    paddingBottom: 2,
  },
  recentActivityTitle: {
    color: "#7d858c",
    fontFamily: "Ariel",
  },
  recentActivityMoviesandStarsContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: 2,
  },
  recentActivityMoviesContainer: {
    flexGrow: 0,
  },
  recentActivityMoviesImage: {
    width: 90,
    aspectRatio: 2 / 3,
    borderRadius: 8,
    margin: 4,
  },
  recentActivityMoviesStars: {
    color: "#7d858c",
    paddingLeft: 5,
  },
  moreActivityContainer: {
    marginTop: 5,
    marginBottom: 10,
    flexDirection: "row",
    paddingLeft: 5,
    width: "100%",
  },
  moreActivityTitle: {
    color: "#7d858c",
    fontWeight: "600",
  },
  moreActivityArrowContainer: {
    marginLeft: "auto",
  },
  moreActivityArrowText: {
    color: "#7d858c",
  },
});
