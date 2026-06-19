//References available at page end

import { LinearGradient } from "expo-linear-gradient";
//import icons for various buttons
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import {
    Image,
    ImageBackground,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { MOVIES } from "../../../data/moviedata";

const MovieDetailPage = () => {
  const { code } = useLocalSearchParams<{ code: string }>();
  const router = useRouter();
  const movie = MOVIES.find((movie) => movie.code === code);
  //404 error handling
  if (!movie) {
    return (
      <View style={styles.container}>
        <Text style={styles.movieTitle}> Movie {code} Not Found</Text>
        <Link href="/movies" asChild>
          <Pressable style={styles.movieTrailerAndLengthContainer}>
            <Text style={styles.movieTrailerText}>Back to main page</Text>
          </Pressable>
        </Link>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: movie?.stillBackdrop,
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.topNavButtonContainer}>
          <Pressable
            onPress={() => {
              router.push("/movies");
            }}
            style={styles.topNavButtonArrowContainer}
          >
            <Ionicons name="arrow-back" style={styles.topNavButtonArrow} />
          </Pressable>
          <View style={styles.topNavButtonDotsContainer}>
            {/* alt 0183 for symbol "·" */}
            <Text style={styles.topNavButtonDot}>·</Text>
            <Text style={styles.topNavButtonDot}>·</Text>
            <Text style={styles.topNavButtonDot}>·</Text>
          </View>
        </View>
        <LinearGradient
          //3 transparent transitions to match style of letterboxd app
          colors={["transparent", "transparent", "transparent", "#181b20"]}
          style={StyleSheet.absoluteFill}
        />
      </ImageBackground>
      <View style={styles.movieBioContainer}>
        <View style={styles.movieBioDetailsContainer}>
          <Text style={styles.movieTitle}> {movie?.title} </Text>
          {/* alt 0183 for symbol "·" */}
          <Text style={styles.movieYear}>
            {movie?.releaseYear} · DIRECTED BY
          </Text>
          <Text style={styles.movieDirector}>{movie?.director}</Text>
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
            <Text style={styles.movieLength}>{movie?.runTime}</Text>
          </View>
        </View>
        <Image
          source={{
            uri: movie?.posterImage,
          }}
          style={styles.moviePoster}
        />
      </View>
      <View style={styles.synopsisContainer}>
        <Text style={styles.synopsisTitleText}>{movie?.synopsisTitle}</Text>
        <Text style={styles.synopsisBodyText}>{movie?.synopsis}</Text>
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

export default MovieDetailPage;

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
  topNavButtonContainer: {
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
    marginTop: 15,
    zIndex: 10,
  },
  topNavButtonArrowContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    backgroundColor: "#46586680",
  },
  topNavButtonArrow: {
    color: "#fff",
  },
  topNavButtonDotsContainer: {
    flexDirection: "column",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#46586680",
    margin: 0,
    padding: 0,
    marginRight: 10,
    marginLeft: "auto",
  },
  topNavButtonDot: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 10,
    textAlignVertical: "center",
    margin: 0,
    padding: 0,
    fontWeight: "bold",
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
    marginTop: 5,
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
    flexDirection: "row",
    alignItems: "flex-end",
    height: 40,
    borderBottomWidth: 1,
    backgroundColor: "#181b20",
    borderBottomColor: "#181b20",
    marginLeft: 1,
    width: "8%",
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
    marginBottom: 5,
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
