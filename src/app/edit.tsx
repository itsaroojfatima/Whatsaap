import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateStatusScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="light-content" backgroundColor="#3b82f6" />

      {/* Top Header Controls */}
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => router.back()} style={styles.closeBtn}>
          <Ionicons name="close" size={24} color="#ffffff" />
        </TouchableOpacity>
        <View style={styles.topRightControls}>
          <TouchableOpacity style={styles.topIconBtn}>
            <Text style={styles.aaText}>Aa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topIconBtn}>
            <Ionicons name="color-palette-outline" size={22} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Center Input Area */}
      <View style={styles.centerContainer}>
        <TextInput
          style={styles.statusInput}
          placeholder="Type a status"
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
          multiline
        />
      </View>

      {/* Bottom Tabs */}
      <View style={styles.bottomTabs}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Voice</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#3b82f6" },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  closeBtn: { padding: 4 },
  topRightControls: { flexDirection: "row", alignItems: "center" },
  topIconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  aaText: { color: "#ffffff", fontWeight: "bold", fontSize: 16 },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  statusInput: {
    fontSize: 28,
    color: "#ffffff",
    textAlign: "center",
    width: "100%",
  },
  bottomTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    backgroundColor: "rgba(0,0,0,0.15)",
  },
  tabItem: { paddingVertical: 6, paddingHorizontal: 16, borderRadius: 16 },
  activeTab: { backgroundColor: "rgba(255,255,255,0.2)" },
  tabText: { color: "rgba(255,255,255,0.7)", fontSize: 15, fontWeight: "600" },
  activeTabText: { color: "#ffffff" },
});
