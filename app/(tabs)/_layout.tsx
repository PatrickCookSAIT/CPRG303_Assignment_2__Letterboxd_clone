import { Feather, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

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
          height: "9%",
          paddingTop: 15,
          paddingLeft: 10,
          paddingRight: 10,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
        headerStyle: {
          backgroundColor: "#003865",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "700",
        },
      }}
    >
      <Tabs.Screen
        //this name has to exactly match the file name without extension
        name="movies"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        //this name has to exactly match the file name without extension
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Feather
              name={focused ? "search" : "search"}
              size={size}
              color={color}
            />
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
            <Ionicons
              name={focused ? "flash" : "flash-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        //this name has to exactly match the file name without extension
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
