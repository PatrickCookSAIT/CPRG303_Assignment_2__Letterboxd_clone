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
          backgroundColor: "#445565",
          borderTopColor: "#1e293b",
          height: "12%",
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
        name="MainPage"
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
    </Tabs>
  );
};

export default TabsLayout;
