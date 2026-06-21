import { Feather, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        //active vs inactive colours
        tabBarActiveTintColor: "#46b8fd",
        tabBarInactiveTintColor: "#94a3ba",

        //tab bar visual style
        tabBarStyle: {
          backgroundColor: "#445565",
          borderTopColor: "#1e293b",
          height: "10%",
          paddingTop: 15,
          paddingLeft: 10,
          paddingRight: 10,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        //this name has to exactly match the file name without extension
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={
                focused
                  ? styles.appNavBarIconsContainerFocused
                  : styles.appNavBarIconsContainer
              }
            >
              <Ionicons
                name={focused ? "grid" : "grid-outline"}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        //this name has to exactly match the file name without extension
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={
                focused
                  ? styles.appNavBarIconsContainerFocused
                  : styles.appNavBarIconsContainer
              }
            >
              <Feather
                name={focused ? "search" : "search"}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        //this name has to exactly match the file name without extension
        name="add"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            //note, the plus symbol is always green and is the only icon to use this colour. It also has no focused vs unfocused version
            <Ionicons name="add-circle-outline" size={size} color="#14ce66" />
          ),
        }}
      />
      <Tabs.Screen
        //this name has to exactly match the file name without extension
        name="activity"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={
                focused
                  ? styles.appNavBarIconsContainerFocused
                  : styles.appNavBarIconsContainer
              }
            >
              <Ionicons
                name={focused ? "flash" : "flash-outline"}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        //this name has to exactly match the file name without extension
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={
                focused
                  ? styles.appNavBarIconsContainerFocused
                  : styles.appNavBarIconsContainer
              }
            >
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  appNavBarIconsContainer: {
    borderRadius: 20,
    height: 40,
    width: 80,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 22,
    paddingRight: 22,
    alignItems: "center",
  },
  appNavBarIconsContainerFocused: {
    backgroundColor: "#334454",
    borderRadius: 20,
    height: 40,
    width: 80,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 22,
    paddingRight: 22,
    alignItems: "center",
  },
});
