import { Stack } from "expo-router";
import React from "react";

const MoviesStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#003865" },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "700",
        },
        headerShown: false,
        contentStyle: { backgroundColor: "#f8fafc" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Movies" }} />
    </Stack>
  );
};

export default MoviesStackLayout;
