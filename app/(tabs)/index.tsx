import { StyleSheet, View } from "react-native";
import Movie from "../components/movie";
//import MainPage from "../components/main-page";
export default function Index() {
  return (
    <View style={styles.container}>
      <Movie />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
