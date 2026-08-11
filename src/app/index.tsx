import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Agar router replace error de toh safe fallback
      try {
        router.replace("/onboarding");
      } catch (e) {
        console.log(e);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      {/* Header ko yahan se direct hide kar diya hai */}
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Kyunke image poori splash screen ki hai, isay full screen render karenge */}
      <Image
        source={require("@/assets/images/image.png")}
        style={styles.fullImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: "80%",
    height: "80%",
  },
});
