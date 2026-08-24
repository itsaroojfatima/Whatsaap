import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateCommunityScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Close Button Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.closeButton}
        >
          <Ionicons name="close" size={24} color="#54656f" />
        </TouchableOpacity>
      </View>

      {/* Content Area */}
      <View style={styles.content}>
        {/* Illustration Placeholder */}
        <View style={styles.illustrationContainer}>
          <View style={styles.communityArtBox}>
            <View style={styles.artRow}>
              <View style={styles.artIconCircle}>
                <Ionicons name="people" size={24} color="#00a884" />
              </View>
              <View style={styles.artLines}>
                <View style={styles.lineLong} />
                <View style={styles.lineShort} />
              </View>
            </View>
            <View style={[styles.artBanner, { backgroundColor: "#00a884" }]}>
              <MaterialCommunityIcons
                name="bullhorn"
                size={20}
                color="#ffffff"
              />
              <View style={styles.lineWhite} />
            </View>
            <View style={[styles.artBanner, { backgroundColor: "#008069" }]}>
              <MaterialCommunityIcons
                name="chat-processing"
                size={20}
                color="#ffffff"
              />
              <View style={styles.lineWhite} />
            </View>
          </View>
        </View>

        {/* Title & Description */}
        <Text style={styles.title}>Create a new community</Text>
        <Text style={styles.description}>
          Bring together a neighborhood, school or more. Create topic-based
          groups for members, and easily send them admin announcements.
        </Text>

        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.linkText}>See example communities &gt;</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.getStartedButton} activeOpacity={0.8}>
          <Text style={styles.getStartedText}>Get started</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  closeButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
    paddingTop: 10,
  },
  illustrationContainer: {
    width: "100%",
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  communityArtBox: {
    width: 260,
    height: 150,
    backgroundColor: "#e7f8f0",
    borderRadius: 16,
    padding: 16,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#d1e7dd",
  },
  artRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  artIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  artLines: {
    flex: 1,
  },
  lineLong: {
    height: 6,
    backgroundColor: "#ffffff",
    borderRadius: 3,
    marginBottom: 4,
    width: "80%",
  },
  lineShort: {
    height: 6,
    backgroundColor: "#ffffff",
    borderRadius: 3,
    width: "50%",
  },
  artBanner: {
    height: 32,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  lineWhite: {
    height: 6,
    backgroundColor: "#ffffff",
    borderRadius: 3,
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#111111",
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: "#54656f",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  linkText: {
    fontSize: 14,
    color: "#00a884",
    fontWeight: "600",
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
  getStartedButton: {
    width: "100%",
    height: 48,
    backgroundColor: "#00643b",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  getStartedText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
