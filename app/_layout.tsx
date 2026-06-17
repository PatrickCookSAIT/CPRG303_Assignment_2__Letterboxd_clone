import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/*Redirect landing page to tabs*/}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
