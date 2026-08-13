import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false, animation: "fade" }} />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.accessibilityCircle}>
          <Ionicons name="accessibility" size={20} color="#008069" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="ellipsis-vertical" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.illustration}
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome to WhatsApp</Text>
        <Text style={styles.subtitle}>
          Read our <Text style={styles.link}>Privacy Policies</Text>. Tap "Agree
          and continue" to accept our{" "}
          <Text style={styles.link}>Terms of Service</Text>.
        </Text>
        <TouchableOpacity style={styles.langButton}>
          <Ionicons name="globe-outline" size={18} color="#000" />
          <Text style={styles.langText}>English</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.agreeButton}
          onPress={() => router.push("/contact")}
        >
          <Text style={styles.agreeButtonText}>Agree and continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 55,
  },
  accessibilityCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginTop: 90,
  },
  menuButton: {
    padding: 5,
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop: -15,
  },
  illustration: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    color: "#111",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 20,
  },
  link: {
    color: "#027eb5",
  },
  langButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  langText: {
    marginHorizontal: 8,
    color: "#000",
    fontWeight: "500",
    fontSize: 14,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 35,
    width: "100%",
    alignItems: "center",
  },
  agreeButton: {
    backgroundColor: "#00a884",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
    marginBottom: 100,
  },
  agreeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
