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

export default function MetaAccountScreen() {
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
          <Ionicons name="close" size={24} color="#111111" />
        </TouchableOpacity>
        <View style={styles.metaTitleContainer}>
          <Ionicons
            name="infinite"
            size={18}
            color="#0064e0"
            style={{ marginRight: 4 }}
          />
          <Text style={styles.metaLogoText}>Meta</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Banner */}
        <View style={styles.bannerBox}>
          <View
            style={{ flexDirection: "row", alignItems: "flex-start", flex: 1 }}
          >
            <Ionicons
              name="logo-whatsapp"
              size={22}
              color="#25D366"
              style={{ marginRight: 10, marginTop: 2 }}
            />
            <Text style={styles.bannerText}>
              You previously added your WhatsApp to Accounts Center. Accounts
              Center is now called a Meta Account.
            </Text>
          </View>
          <TouchableOpacity style={styles.bannerClose}>
            <Ionicons name="close" size={18} color="#54656f" />
          </TouchableOpacity>
        </View>

        <Text style={styles.mainTitle}>Meta Account</Text>
        <Text style={styles.mainSubtitle}>
          Control how your account works across Meta apps and devices.{" "}
          <Text style={styles.linkText}>Learn more</Text>
        </Text>

        {/* Profile Card */}
        <TouchableOpacity style={styles.profileCard} activeOpacity={0.7}>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <Ionicons
              name="infinite"
              size={22}
              color="#0064e0"
              style={{ marginRight: 12 }}
            />
            <View>
              <Text style={styles.phoneText}>+92 324 0512179</Text>
              <Text style={styles.profilesText}>3 profiles</Text>
            </View>
          </View>
          <View style={styles.avatarsRow}>
            <View style={styles.miniAvatar} />
            <View style={styles.miniBadge}>
              <Ionicons name="chevron-forward" size={14} color="#54656f" />
            </View>
          </View>
        </TouchableOpacity>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuRow}>
            <MaterialCommunityIcons
              name="account-group-outline"
              size={22}
              color="#111"
              style={{ marginRight: 16 }}
            />
            <Text style={styles.menuText}>Cross-profile experiences</Text>
            <Ionicons name="chevron-forward" size={18} color="#54656f" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuRow}>
            <MaterialCommunityIcons
              name="file-document-outline"
              size={22}
              color="#111"
              style={{ marginRight: 16 }}
            />
            <Text style={styles.menuText}>
              Your information and permissions
            </Text>
            <Ionicons name="chevron-forward" size={18} color="#54656f" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuRow}>
            <MaterialCommunityIcons
              name="bullhorn-outline"
              size={22}
              color="#111"
              style={{ marginRight: 16 }}
            />
            <Text style={styles.menuText}>Ad preferences</Text>
            <Ionicons name="chevron-forward" size={18} color="#54656f" />
          </TouchableOpacity>
        </View>

        {/* Manage account box */}
        <TouchableOpacity style={styles.manageCard} activeOpacity={0.7}>
          <MaterialCommunityIcons
            name="cog-outline"
            size={22}
            color="#111"
            style={{ marginRight: 16 }}
          />
          <Text style={styles.menuText}>Manage account</Text>
          <Ionicons name="chevron-forward" size={18} color="#54656f" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  backButton: { padding: 4, marginRight: 12 },
  metaTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginRight: 32,
  },
  metaLogoText: { fontSize: 18, fontWeight: "bold", color: "#0064e0" },
  scrollContent: { paddingHorizontal: 16, paddingBottom: 30 },
  bannerBox: {
    backgroundColor: "#f0f2f5",
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  bannerText: { flex: 1, fontSize: 13, color: "#111111", lineHeight: 18 },
  bannerClose: { padding: 2 },
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111111",
    textAlign: "center",
    marginBottom: 6,
  },
  mainSubtitle: {
    fontSize: 13,
    color: "#54656f",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  linkText: { color: "#0064e0", fontWeight: "600" },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    marginBottom: 20,
  },
  phoneText: { fontSize: 15, fontWeight: "600", color: "#111" },
  profilesText: { fontSize: 13, color: "#54656f", marginTop: 2 },
  avatarsRow: { flexDirection: "row", alignItems: "center" },
  miniAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#333",
    marginRight: 8,
  },
  miniBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#e2e8f0",
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    backgroundColor: "#f8f9fa",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    marginBottom: 16,
    paddingVertical: 4,
  },
  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  menuText: { flex: 1, fontSize: 15, color: "#111", fontWeight: "500" },
  manageCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
});
