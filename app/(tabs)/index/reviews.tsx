import { router } from "expo-router";
import React from "react";
import {
    Image,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { MOVIES } from "../../../data/moviedata";
import { REVIEWS } from "../../../data/reviewdata";

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
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.reviewPageHeaderContainer}>
          <Text style={styles.reviewPageHeaderText}>Popular This Week</Text>
        </View>
        {REVIEWS.map((review) => {
          const movie = MOVIES.find((m) => m.code === review.movieCode);
          return (
            <View key={review.code} style={styles.reviewCardContainer}>
              <View style={styles.reviewCardHeaderContainer}>
                <Text style={styles.reviewCardHeaderMovieTitle}>
                  {movie?.title}
                </Text>
                <Text style={styles.reviewCardHeaderMovieYear}>
                  {movie?.releaseYear}
                </Text>
                <View style={styles.reviewCardHeaderUserContainer}>
                  <Text style={styles.reviewCardHeaderUser}>
                    {review.userName}
                  </Text>
                  <Image
                    style={styles.reviewCardHeaderUserPFP}
                    source={{
                      uri: review.userPFP,
                    }}
                  ></Image>
                </View>
              </View>
              <Text style={styles.reviewCardStarsContainer}>
                {"★".repeat(review.stars)}
              </Text>
              <View style={styles.reviewCardReviewContainer}>
                <Pressable
                  onPress={() => router.push(`/${movie.code}`)}
                  style={styles.reviewCardReviewMoviePosterContainer}
                >
                  <Image
                    source={{
                      uri: movie?.posterImage,
                    }}
                    style={styles.reviewCardReviewMoviePosterImage}
                  ></Image>
                </Pressable>
                <Text style={styles.reviewCardReviewText}>{review.text}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
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
  reviewPageHeaderContainer: {
    alignItems: "flex-start",
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 10,
    paddingLeft: 10,
  },
  reviewPageHeaderText: {
    fontSize: 16,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
  },
  reviewCardContainer: {
    marginTop: 12,
    paddingLeft: 10,
    borderBottomColor: "#445565",
    borderBottomWidth: 1,
    flexDirection: "column",
    paddingBottom: 7,
  },
  reviewCardHeaderContainer: {
    flexDirection: "row",
  },
  reviewCardHeaderMovieTitle: {
    fontSize: 14,
    fontFamily: "Arial",
    fontWeight: "800",
    color: "#a2a9af",
  },
  reviewCardHeaderMovieYear: {
    fontSize: 14,
    fontFamily: "Arial",
    color: "#7d858c",
    marginLeft: 5,
    paddingTop: 3,
  },
  reviewCardHeaderUserContainer: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: 10,
  },
  reviewCardHeaderUser: {
    alignItems: "flex-end",
    textAlign: "left",
    fontSize: 12,
    fontFamily: "Arial",
    fontWeight: "200",
    color: "#7d858c",
    marginRight: 4,
    paddingTop: 4,
  },
  reviewCardHeaderUserPFP: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  reviewCardStarsContainer: {
    paddingLeft: 2,
    color: "#10d659",
  },
  reviewCardReviewContainer: {
    flexDirection: "row",
  },
  reviewCardReviewMoviePosterContainer: {
    flexGrow: 0,
  },
  reviewCardReviewMoviePosterImage: {
    width: 90,
    aspectRatio: 2 / 3,
    borderRadius: 8,
  },
  reviewCardReviewText: {
    marginLeft: 8,
    fontSize: 14,
    fontFamily: "Arial",
    color: "#7d858c",
    flex: 1,
    flexWrap: "wrap",
  },
});
