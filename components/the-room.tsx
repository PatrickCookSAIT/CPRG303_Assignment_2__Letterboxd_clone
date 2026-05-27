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
      <Text style={styles.text}>test</Text>
    </View>
  );
};

export default TheRoom;

const styles = StyleSheet.create({
  container: {
    //dont need top padding for status bar as phone info blends with background image
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
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
