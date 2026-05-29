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

//Popular this week movies
const popularMovies = [
  {
    /* reference [1] */
    id: "1",
    image:
      "https://a.ltrbxd.com/resized/sm/upload/qq/yi/i3/dk/aUC39cFC2KO8CJ0EV0ijIJRr3PT-0-1000-0-1500-crop.jpg?v=95164ef310",
  },
  {
    /* reference [2] */
    id: "2",
    image:
      "https://a.ltrbxd.com/resized/film-poster/1/0/6/8/8/5/9/1068859-cool-cat-fights-coronavirus-0-1000-0-1500-crop.jpg?v=5a93d9f990",
  },
  {
    /* reference [3] */
    id: "3",
    image:
      "https://a.ltrbxd.com/resized/film-poster/1/4/1/8/6/6/141866-fateful-findings-0-1000-0-1500-crop.jpg?v=e6a020c8e1",
  },
  {
    /* reference [4] */
    id: "4",
    image:
      "https://a.ltrbxd.com/resized/film-poster/4/0/6/9/6/40696-mega-shark-vs-giant-octopus-0-1000-0-1500-crop.jpg?v=7c30243e33",
  },
  {
    /* reference [5] */
    id: "5",
    image:
      "https://a.ltrbxd.com/resized/film-poster/7/2/7/4/4/9/727449-2025-the-world-enslaved-by-a-virus-0-1000-0-1500-crop.jpg?v=7ba371068c",
  },
  {
    /* reference [6] */
    id: "6",
    image:
      "https://a.ltrbxd.com/resized/film-poster/1/1/7/3/4/2/3/1173423-hot-frosty-0-1000-0-1500-crop.jpg?v=3c1c42b6f5",
  },
  {
    /* reference [7] */
    id: "7",
    image:
      "https://a.ltrbxd.com/resized/film-poster/2/5/2/4/5/1/252451-superfast--0-1000-0-1500-crop.jpg?v=295ae6a988",
  },
  {
    /* reference [8] */
    id: "8",
    image:
      "https://a.ltrbxd.com/resized/film-poster/1/4/5/8/1458-samurai-cop-0-1000-0-1500-crop.jpg?v=2003ba3e4b",
  },
  {
    /* reference [9] */
    id: "9",
    image:
      "https://a.ltrbxd.com/resized/film-poster/3/5/6/1/6/35616-hard-ticket-to-hawaii-0-1000-0-1500-crop.jpg?v=2cc58c9f58",
  },
];
const videoStoreMovies = [
  {
    /* reference [10] */
    id: "1",
    image:
      "https://a.ltrbxd.com/resized/film-poster/4/6/1/5/9/46159-plan-9-from-outer-space-0-2000-0-3000-crop.jpg?v=3d447bc86a",
  },
  {
    /* reference [11] */
    id: "2",
    image:
      "https://a.ltrbxd.com/resized/film-poster/3/2/0/0/9/0/320090-hot-bot-0-2000-0-3000-crop.jpg?v=e4c0774e94",
  },
  {
    /* reference [12] */
    id: "3",
    image:
      "https://a.ltrbxd.com/resized/film-poster/3/4/9/4/1/34941-troll-2-0-2000-0-3000-crop.jpg?v=f24546a2b3",
  },
  {
    /* reference [13] */
    id: "4",
    image:
      "https://a.ltrbxd.com/resized/film-poster/2/5/3/0/0/3/253003-cool-cat-saves-the-kids-0-2000-0-3000-crop.jpg?v=f0c5c800d7",
  },
  {
    /* reference [14] */
    id: "5",
    image:
      "https://a.ltrbxd.com/resized/film-poster/3/0/9/1/8/3/309183-pass-thru-0-2000-0-3000-crop.jpg?v=d6d2d75d80",
  },
  {
    /* reference [15] */
    id: "6",
    image:
      "https://a.ltrbxd.com/resized/sm/upload/ek/rx/ho/4o/rEWDgroPVLKHYJcL1bbwEpWyBkh-0-2000-0-3000-crop.jpg?v=8a343ce097",
  },
  {
    /* reference [16] */
    id: "7",
    image:
      "https://a.ltrbxd.com/resized/film-poster/2/5/6/3/7/25637-no-holds-barred-0-2000-0-3000-crop.jpg?v=e398626a3a",
  },
  {
    /* reference [17] */
    id: "8",
    image:
      "https://a.ltrbxd.com/resized/film-poster/4/6/7/5/7/46757-stop-or-my-mom-will-shoot-0-2000-0-3000-crop.jpg?v=e384237708",
  },
  {
    /* reference [18] */
    id: "9",
    image:
      "https://a.ltrbxd.com/resized/film-poster/5/2/0/3/2/8/520328-megalopolis-0-2000-0-3000-crop.jpg?v=64ab4fa858",
  },
  {
    /* reference [19] */
    id: "10",
    image:
      "https://a.ltrbxd.com/resized/film-poster/5/6/0/6/9/7/560697-madame-web-0-2000-0-3000-crop.jpg?v=305a4aead1",
  },
];
const MainPage = () => {
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
        data={popularMovies}
        keyExtractor={(item) => item.id}
        numColumns={3}
        scrollEnabled={false}
        contentContainerStyle={styles.popularMoviesContainer}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.image }}
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
        {videoStoreMovies.map((movie) => (
          <Image
            key={movie.id}
            source={{ uri: movie.image }}
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
