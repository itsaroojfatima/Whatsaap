import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StarredMessagesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#54656f" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Starred</Text>
      </View>

      {/* Center Empty Content */}
      <View style={styles.content}>
        <View style={styles.starCircle}>
          <Ionicons name="star" size={32} color="#ffffff" />
        </View>

        <Text style={styles.descriptionText}>
          Tap and hold on any message or channel update to star it, so you can
          easily find it later.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#f0f2f5",
  },
  backButton: {
    padding: 4,
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#111111",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    marginBottom: 60,
  },
  starCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#00a884",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  descriptionText: {
    fontSize: 14,
    color: "#54656f",
    textAlign: "center",
    lineHeight: 20,
  },
});
