import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        //active vs inactive colours
        tabBarActiveTintColor: "#f59e0b",
        tabBarInactiveTintColor: "#94a3ba",

        //tab bar visual style
        tabBarStyle: {
          backgroundColor: "#0f172a",
          borderTopColor: "#1e293b",
          height: 64,
          paddingBottom: 6,
          paddingTop: 3,
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
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        //this name has to exactly match the file name without extension
        name="courses"
        options={{
          title: "Courses",
          //get rid of the double header showing title of screen
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "book" : "book-outline"}
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
          title: "Profile",
          tabBarBadge: 56,
          tabBarBadgeStyle: {
            backgroundColor: "#DC2626",
            color: "#ffffff",
            fontSize: 10,
          },
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
