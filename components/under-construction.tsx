import React from "react";
import { Image, StyleSheet, View } from "react-native";

const UnderConstruction = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://static.wikia.nocookie.net/montypython/images/8/82/WilliamPalinGrail.png/revision/latest?cb=20140428134013",
        }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default UnderConstruction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
});
