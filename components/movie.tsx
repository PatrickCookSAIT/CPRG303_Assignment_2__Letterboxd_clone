//References available at page end

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
//import icons for various buttons
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Movie = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          /* reference [20] */
          uri: "https://a.ltrbxd.com/resized/sm/upload/ay/jb/b5/xa/the-room-1200-1200-675-675-crop-000000.jpg?v=b2e17b62e4",
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.topNavButtonContainer}>
          <View style={styles.topNavButtonArrowContainer}>
            <Ionicons name="arrow-back" style={styles.topNavButtonArrow} />
          </View>
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
            /* reference [20] */
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
  topNavButtonContainer: {
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
    marginTop: 15,
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
    backgroundColor: "transparent",
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

{
  /* References
  [1] “The Room Film Poster.” Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/sm/upload/qq/yi/i3/dk/aUC39cFC2KO8CJ0EV0ijIJRr3PT-0-1000-0-1500-crop.jpg?v=95164ef310

[2] “Cool Cat Fights Corona Virus Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/1/0/6/8/8/5/9/1068859-cool-cat-fights-coronavirus-0-1000-0-1500-crop.jpg?v=5a93d9f990

[3] “Fateful Findings Corona Virus Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/1/4/1/8/6/6/141866-fateful-findings-0-1000-0-1500-crop.jpg?v=e6a020c8e1

[4] “Mega Shark Versus Giant Octopus Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/4/0/6/9/6/40696-mega-shark-vs-giant-octopus-0-1000-0-1500-crop.jpg?v=7c30243e33

[5] “2025: The World Enslaved by a Virus Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/7/2/7/4/4/9/727449-2025-the-world-enslaved-by-a-virus-0-1000-0-1500-crop.jpg?v=7ba371068c

[6] “Hot Frosty Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/1/1/7/3/4/2/3/1173423-hot-frosty-0-1000-0-1500-crop.jpg?v=3c1c42b6f5

[7] “Super Fast Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/2/5/2/4/5/1/252451-superfast--0-1000-0-1500-crop.jpg?v=295ae6a988

[8] “Hard Ticket to Hawaii Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/3/5/6/1/6/35616-hard-ticket-to-hawaii-0-1000-0-1500-crop.jpg?v=2cc58c9f58

[9] “Samurai Cop Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/1/4/5/8/1458-samurai-cop-0-1000-0-1500-crop.jpg?v=2003ba3e4b

[10] “Plan 9 from Outer Space Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/4/6/1/5/9/46159-plan-9-from-outer-space-0-2000-0-3000-crop.jpg?v=3d447bc86a

[11] “Hot Bot Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/3/2/0/0/9/0/320090-hot-bot-0-2000-0-3000-crop.jpg?v=e4c0774e94

[12] “Troll 2 Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/3/4/9/4/1/34941-troll-2-0-2000-0-3000-crop.jpg?v=f24546a2b3

[13] “Cool Cat Saves the Kids Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/2/5/3/0/0/3/253003-cool-cat-saves-the-kids-0-2000-0-3000-crop.jpg?v=f0c5c800d7

[14] “Pass Thru Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/3/0/9/1/8/3/309183-pass-thru-0-2000-0-3000-crop.jpg?v=d6d2d75d80

[15] “Roar Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/sm/upload/ek/rx/ho/4o/rEWDgroPVLKHYJcL1bbwEpWyBkh-0-2000-0-3000-crop.jpg?v=8a343ce097

[16] “No Holds Barred Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/2/5/6/3/7/25637-no-holds-barred-0-2000-0-3000-crop.jpg?v=e398626a3a

[17] “Stop or My Mom Will Shoot Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/4/6/7/5/7/46757-stop-or-my-mom-will-shoot-0-2000-0-3000-crop.jpg?v=e384237708

[18] “Megalopolis Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/5/2/0/3/2/8/520328-megalopolis-0-2000-0-3000-crop.jpg?v=64ab4fa858

[19] “Madame Web Film Poster.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/film-poster/5/6/0/6/9/7/560697-madame-web-0-2000-0-3000-crop.jpg?v=305a4aead1

[20] “The Room Rooftop Still.”  Letterboxd. Accessed: May 27, 2026. [Online]. Available: https://a.ltrbxd.com/resized/sm/upload/ay/jb/b5/xa/the-room-1200-1200-675-675-crop-000000.jpg?v=b2e17b62e4

 */
}
