import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LinkedDevicesScreen() {
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
        <Text style={styles.headerTitle}>Linked devices</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Illustration Box */}
        <View style={styles.illustrationBox}>
          <View style={styles.devicesArt}>
            <View style={styles.phoneBox}>
              <Ionicons
                name="phone-portrait-outline"
                size={28}
                color="#00a884"
              />
              <View style={styles.heartBadge}>
                <Ionicons name="heart" size={12} color="#00a884" />
              </View>
            </View>
            <View style={styles.laptopBox}>
              <MaterialCommunityIcons name="laptop" size={36} color="#00a884" />
            </View>
          </View>

          <Text style={styles.infoDescription}>
            You can link other devices to this account.{" "}
            <Text style={styles.linkText}>Learn more</Text>
          </Text>

          <TouchableOpacity style={styles.linkDeviceButton} activeOpacity={0.8}>
            <Text style={styles.linkDeviceButtonText}>Link a device</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionDivider} />

        {/* Device Status Section */}
        <View style={styles.statusSection}>
          <Text style={styles.statusHeader}>DEVICE STATUS</Text>
          <Text style={styles.statusSubtext}>
            Tap a device to rename it or log out.
          </Text>

          {/* Device 1 */}
          <TouchableOpacity style={styles.deviceRow} activeOpacity={0.7}>
            <View style={styles.deviceIconCircle}>
              <MaterialCommunityIcons
                name="microsoft"
                size={22}
                color="#ffffff"
              />
            </View>
            <View style={styles.deviceDetails}>
              <Text style={styles.deviceName}>Windows</Text>
              <Text style={styles.deviceTime}>
                Last active today at 5:13 AM
              </Text>
            </View>
          </TouchableOpacity>

          {/* Device 2 */}
          <TouchableOpacity style={styles.deviceRow} activeOpacity={0.7}>
            <View style={styles.deviceIconCircle}>
              <MaterialCommunityIcons
                name="microsoft"
                size={22}
                color="#ffffff"
              />
            </View>
            <View style={styles.deviceDetails}>
              <Text style={styles.deviceName}>Windows</Text>
              <Text style={styles.deviceTime}>
                Last active August 9, 7:34 AM
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Encryption Footer */}
        <View style={styles.encryptionContainer}>
          <Ionicons
            name="lock-closed"
            size={12}
            color="#54656f"
            style={{ marginRight: 4 }}
          />
          <Text style={styles.encryptionText}>
            Your personal messages are{" "}
            <Text style={styles.encryptBold}>end-to-end encrypted</Text> on all
            your devices.
          </Text>
        </View>
      </ScrollView>
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
  scrollContent: {
    paddingBottom: 30,
  },
  illustrationBox: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  devicesArt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    marginBottom: 10,
  },
  phoneBox: {
    width: 60,
    height: 90,
    backgroundColor: "#e7f8f0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginRight: 15,
  },
  heartBadge: {
    position: "absolute",
    top: -5,
    right: -10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 2,
    elevation: 2,
  },
  laptopBox: {
    width: 90,
    height: 70,
    backgroundColor: "#e7f8f0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  infoDescription: {
    fontSize: 14,
    color: "#54656f",
    textAlign: "center",
    marginBottom: 16,
  },
  linkText: {
    color: "#00643b",
    fontWeight: "600",
  },
  linkDeviceButton: {
    width: "100%",
    height: 48,
    backgroundColor: "#00643b",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  linkDeviceButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  sectionDivider: {
    height: 8,
    backgroundColor: "#f0f2f5",
    marginVertical: 20,
  },
  statusSection: {
    paddingHorizontal: 20,
  },
  statusHeader: {
    fontSize: 12,
    fontWeight: "600",
    color: "#54656f",
    marginBottom: 4,
  },
  statusSubtext: {
    fontSize: 13,
    color: "#54656f",
    marginBottom: 16,
  },
  deviceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  deviceIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#00a884",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  deviceDetails: {
    flex: 1,
  },
  deviceName: {
    fontSize: 16,
    color: "#111111",
    fontWeight: "400",
  },
  deviceTime: {
    fontSize: 13,
    color: "#54656f",
    marginTop: 2,
  },
  encryptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  encryptionText: {
    fontSize: 12,
    color: "#54656f",
    textAlign: "center",
  },
  encryptBold: {
    color: "#00643b",
    fontWeight: "500",
  },
});
