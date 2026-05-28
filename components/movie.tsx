import { LinearGradient } from "expo-linear-gradient";
import React from "react";
//import icons for various buttons
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const Movie = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://a.ltrbxd.com/resized/sm/upload/ay/jb/b5/xa/the-room-1200-1200-675-675-crop-000000.jpg?v=b2e17b62e4",
        }}
        style={styles.backgroundImage}
      >
        <LinearGradient
          //3 transparent transitions to match style of letterboxd app
          colors={["transparent", "transparent", "transparent", "#181b20"]}
          style={StyleSheet.absoluteFill}
        />
      </ImageBackground>
      <View style={styles.movieBioContainer}>
        <View style={styles.movieBioDetailsContainer}>
          <Text style={styles.movieTitle}>The Room</Text>
          {/* alt 0183 for symbol "·" */}
          <Text style={styles.movieYear}>2003 · DIRECTED BY</Text>
          <Text style={styles.movieDirector}>Tommy Wiseau</Text>
          <View style={styles.movieTrailerAndLengthContainer}>
            <View style={styles.movieTailerButton}>
              <View style={styles.trailerPlayIconContainer}>
                <MaterialIcons
                  name="play-arrow"
                  style={styles.trailerPlayIcon}
                />
              </View>
              <Text style={styles.movieTrailerText}>TRAILER</Text>
            </View>
            <Text style={styles.movieLength}>100 mins</Text>
          </View>
        </View>
        <Image
          source={{
            uri: "https://a.ltrbxd.com/resized/sm/upload/qq/yi/i3/dk/aUC39cFC2KO8CJ0EV0ijIJRr3PT-0-1000-0-1500-crop.jpg?v=95164ef310",
          }}
          style={styles.moviePoster}
        />
      </View>
      <View style={styles.synopsisContainer}>
        <Text style={styles.synopsisTitleText}>
          CAN YOU EVER REALLY TRUST ANYONE?
        </Text>
        <Text style={styles.synopsisBodyText}>
          What a story! Everyone&apos;s favourite customer is back in a brand
          new adventure. Johnny is a successful banker with great respect and
          dedication to the people in his life, especially his future wife Lisa.
          The happy-go-lucky football tosser sees his world tearing him apart
          when everyone betrays him. And now he is fed up with this world!
        </Text>
      </View>
      <View style={styles.ratingsContainer}>
        <Text style={styles.ratingsTitleText}>RATINGS</Text>
        <View style={styles.ratingsRatingContainer}>
          <View style={styles.ratingsOneStarIconContainer}>
            <AntDesign name="star" style={styles.ratingsStarIcon} />
          </View>
          {/* 10 ratings bar for bargraph showing 1 to 10 ratings */}
          <View style={styles.ratingsBarContainer}>
            <View style={styles.ratingBarOne}></View>
          </View>
          <View style={styles.ratingsBarContainer}>
            <View style={styles.ratingBarTwo}></View>
          </View>
          <View style={styles.ratingsBarContainer}>
            <View style={styles.ratingBarThree}></View>
          </View>
          <View style={styles.ratingsBarContainer}>
            <View style={styles.ratingBarFour}></View>
          </View>
          <View style={styles.ratingsBarContainer}>
            <View style={styles.ratingBarFive}></View>
          </View>
          <View style={styles.ratingsBarContainer}>
            <View style={styles.ratingBarSix}></View>
          </View>
          <View style={styles.ratingsBarContainer}>
            <View style={styles.ratingBarSeven}></View>
          </View>
          <View style={styles.ratingsBarContainer}>
            <View style={styles.ratingBarEight}></View>
          </View>
          <View style={styles.ratingsBarContainer}>
            <View style={styles.ratingBarNine}></View>
          </View>
          <View style={styles.ratingsBarContainer}>
            <View style={styles.ratingBarTen}></View>
          </View>
          <View style={styles.ratingsScoreAndStarContainer}>
            <View style={styles.ratingsScoreContainer}>
              <Text style={styles.ratingsScoreText}>2.6</Text>
            </View>
            <View style={styles.ratingsFiveStarIconContainer}>
              <AntDesign name="star" style={styles.ratingsStarIcon} />
              <AntDesign name="star" style={styles.ratingsStarIcon} />
              <AntDesign name="star" style={styles.ratingsStarIcon} />
              <AntDesign name="star" style={styles.ratingsStarIcon} />
              <AntDesign name="star" style={styles.ratingsStarIcon} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.loginButtonContainer}>
          <View style={styles.loginProfileIconContainer}>
            <Ionicons
              name="person-circle-outline"
              style={styles.loginProfileIcon}
            />
          </View>
          <Text style={styles.loginButtonText}>
            Rate, log, review, add to list + more
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    //don't need top padding for status bar as phone info blends with background image. found through trial and error
    flex: 1,
    width: "100%",
    backgroundColor: "#181b20",
  },

  backgroundImage: {
    width: "100%",
    aspectRatio: 4 / 2,
  },
  movieBioContainer: {
    flexDirection: "row",
  },
  movieBioDetailsContainer: {
    flexDirection: "column",
    width: "70%",
    padding: 10,
    marginRight: 10,
  },
  movieTitle: {
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: "700",
    color: "#fff",
  },
  movieYear: {
    marginTop: 10,
    fontSize: 10,
    fontFamily: "Arial",
    color: "#7d858c",
  },
  movieDirector: {
    fontSize: 10,
    fontFamily: "Arial",
    fontWeight: "800",
    color: "#a2a9af",
    marginTop: 1,
    marginBottom: 10,
  },
  movieTrailerAndLengthContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  movieTailerButton: {
    backgroundColor: "#465866",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 25,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 2,
    paddingTop: 2,
    flexDirection: "row",
  },
  trailerPlayIconContainer: {
    paddingTop: 2,
    paddingBottom: 2,
  },
  trailerPlayIcon: {
    color: "#fff",
    marginRight: 2,
    fontWeight: "bold",
    fontSize: 10,
  },
  movieTrailerText: {
    fontSize: 10,
    fontFamily: "Arial",
    color: "#fff",
    fontWeight: "600",
    paddingTop: 2,
    paddingBottom: 2,
  },
  movieLength: {
    fontSize: 10,
    fontFamily: "Arial",
    color: "#7d858c",
    marginLeft: 10,
  },
  moviePoster: {
    width: "25%",
    aspectRatio: 2 / 3,
    alignSelf: "flex-end",
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#cdcecf",
  },
  synopsisContainer: {
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#445565",
  },
  synopsisTitleText: {
    fontSize: 10,
    fontFamily: "Arial",
    color: "#7d858c",
    paddingBottom: 14,
  },
  synopsisBodyText: {
    fontSize: 10,
    fontFamily: "Arial",
    color: "#7d858c",
    fontWeight: "600",
    paddingBottom: 15,
  },
  sectionContainer: {
    paddingTop: 15,
  },
  ratingsContainer: {
    padding: 10,
    backgroundColor: "#181b20",
  },
  ratingsTitleText: {
    fontSize: 10,
    fontFamily: "Arial",
    color: "#7d858c",
    fontWeight: "600",
    marginBottom: 10,
  },
  ratingsOneStarIconContainer: {
    marginRight: 5,
    paddingTop: 32,
  },
  ratingsFiveStarIconContainer: {
    flexDirection: "row",
  },
  ratingsRatingContainer: {
    flexDirection: "row",
    width: "100%",
  },
  ratingsScoreAndStarContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 10,
    paddingTop: 10,
  },
  ratingsScoreContainer: {
    marginBottom: 4,
  },
  ratingsScoreText: {
    fontSize: 16,
    fontFamily: "Arial",
    color: "#7d858c",
    fontWeight: "400",
  },

  ratingsBarContainer: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    height: 40,
    borderBottomWidth: 1,
    backgroundColor: "#181b20",
    borderBottomColor: "#181b20",
    marginLeft: 1,
  },
  ratingBarOne: {
    backgroundColor: "#445565",
    height: "70%",
    width: "100%",
  },
  ratingBarTwo: {
    backgroundColor: "#445565",
    height: "60%",
    width: "100%",
  },
  ratingBarThree: {
    backgroundColor: "#445565",
    height: "10%",
    width: "100%",
  },
  ratingBarFour: {
    backgroundColor: "#445565",
    height: "20%",
    width: "100%",
  },
  ratingBarFive: {
    backgroundColor: "#445565",
    height: "10%",
    width: "100%",
  },
  ratingBarSix: {
    backgroundColor: "#445565",
    height: "20%",
    width: "100%",
  },
  ratingBarSeven: {
    backgroundColor: "#445565",
    height: "10%",
    width: "100%",
  },
  ratingBarEight: {
    backgroundColor: "#445565",
    height: "20%",
    width: "100%",
  },
  ratingBarNine: {
    backgroundColor: "#445565",
    height: "5%",
    width: "100%",
  },
  ratingBarTen: {
    backgroundColor: "#445565",
    height: "100%",
    width: "100%",
  },

  ratingsStarIcon: {
    color: "#0fdc66",
    fontSize: 8,
  },
  loginContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#445565",
    borderTopWidth: 1,
  },
  loginButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#465866",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    width: "92%",
    marginTop: 10,
    marginBottom: 10,
  },
  loginButtonText: {
    fontSize: 10,
    fontFamily: "Arial",
    color: "#fff",
    fontWeight: "200",
    paddingTop: 4,
  },
  loginProfileIconContainer: {
    paddingTop: 2,
  },
  loginProfileIcon: {
    color: "#6a7b8b",
    fontSize: 14,
    paddingRight: 4,
  },
});
