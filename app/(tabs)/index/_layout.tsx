import { Stack } from "expo-router";
import React from "react";

const MoviesStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#000000" },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "700",
        },
        headerShown: false,
        contentStyle: { backgroundColor: "#f8fafc" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "LetterBoxd" }} />
    </Stack>
  );
};

export default MoviesStackLayout;
