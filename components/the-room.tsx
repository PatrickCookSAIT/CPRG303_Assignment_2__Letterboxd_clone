import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from "react-native";

const TheRoom = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://a.ltrbxd.com/resized/sm/upload/ay/jb/b5/xa/the-room-1200-1200-675-675-crop-000000.jpg?v=b2e17b62e4",
        }}
        style={styles.backgroundImage}
      >
        <LinearGradient
          //4 transparent tranistions to match style of letterboxd app
          colors={[
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "#181b20",
          ]}
          style={StyleSheet.absoluteFill}
        />
      </ImageBackground>
      <View style={styles.movieBioContainer}>
        <Text style={styles.movieTitle}>The Room</Text>
      </View>
    </View>
  );
};

export default TheRoom;

const styles = StyleSheet.create({
  container: {
    //don't need top padding for status bar as phone info blends with background image. found through trial and error
    flex: 1,
    width: "100%",
    backgroundColor: "#181b20",
  },
  backgroundImageContainer: {
    width: "100%",
  },
  backgroundImage: {
    width: Dimensions.get("window").width,
    aspectRatio: 3 / 2,
  },
  movieBioContainer: {
    paddingTop: 15,
  },
  movieTitle: {
    fontSize: 24,
    fontFamily: "Arial",
    fontWeight: "700",
    color: "#fff",
  },
});
