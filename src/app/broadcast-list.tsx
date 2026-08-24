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

export default function BroadcastsScreen() {
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
        <Text style={styles.headerTitle}>Broadcasts</Text>
      </View>

      {/* Info Card / Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statsHeaderRow}>
          <Text style={styles.monthLabel}>This month</Text>
          <Text style={styles.dateRangeLabel}>01 Aug - 31 Aug</Text>
        </View>

        <View style={styles.statsCountsRow}>
          <View>
            <Text style={styles.countNumber}>0</Text>
            <Text style={styles.countSubtext}>Sent</Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.countNumber}>35</Text>
            <Text style={styles.countSubtext}>Remaining</Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: "0%" }]} />
        </View>

        <Text style={styles.footerInfoText}>
          Send up to 35 broadcasts per month.{" "}
          <Text style={styles.learnMoreText}>Learn more</Text>
        </Text>
      </View>

      <View style={styles.divider} />

      {/* Center Empty State */}
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No broadcasts</Text>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fabButton} activeOpacity={0.8}>
        <Ionicons name="add" size={24} color="#ffffff" />
      </TouchableOpacity>
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
  statsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  statsHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  monthLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111111",
  },
  dateRangeLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111111",
  },
  statsCountsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  countNumber: {
    fontSize: 24,
    fontWeight: "400",
    color: "#111111",
  },
  countSubtext: {
    fontSize: 13,
    color: "#54656f",
  },
  progressBarBackground: {
    height: 4,
    backgroundColor: "#e9edef",
    borderRadius: 2,
    width: "100%",
    marginBottom: 12,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#00a884",
    borderRadius: 2,
  },
  footerInfoText: {
    fontSize: 13,
    color: "#54656f",
  },
  learnMoreText: {
    color: "#00643b",
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#f0f2f5",
    marginTop: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 14,
    color: "#8696a0",
  },
  fabButton: {
    position: "absolute",
    right: 20,
    bottom: 25,
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#00643b",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
});
