import { StyleSheet, View } from "react-native";
import TheRoom from "../components/the-room";
export default function Index() {
  return (
    <View style={styles.container}>
      <TheRoom />
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
