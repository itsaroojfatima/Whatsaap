import { Ionicons } from "@expo/vector-icons";
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CommunitiesScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.whatsappTitle}>Communities</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* New Community Item */}
        <TouchableOpacity style={styles.itemRow} activeOpacity={0.7}>
          <View style={styles.newCommunityIconContainer}>
            <View style={styles.iconBackground}>
              <Ionicons name="people" size={24} color="#ffffff" />
            </View>
            <View style={styles.plusBadge}>
              <Ionicons name="add" size={12} color="#ffffff" />
            </View>
          </View>
          <Text style={styles.itemTitle}>New community</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Community Group Section */}
        <View style={styles.communitySection}>
          {/* Community Header */}
          <TouchableOpacity
            style={styles.communityHeaderRow}
            activeOpacity={0.7}
          >
            <View style={styles.communityAvatar}>
              <Text style={styles.communityAvatarText}>NDA</Text>
            </View>
            <Text style={styles.communityName} numberOfLines={1}>
              NDA - B#41 | Spoken English Comm...
            </Text>
          </TouchableOpacity>

          {/* Announcements Row */}
          <TouchableOpacity style={styles.announcementRow} activeOpacity={0.7}>
            <View style={styles.announcementIconBox}>
              <Ionicons name="megaphone" size={20} color="#00a884" />
            </View>
            <View style={styles.announcementDetails}>
              <Text style={styles.announcementTitle}>Announcements</Text>
              <Text style={styles.announcementSubtitle} numberOfLines={1}>
                ~ Abeera Ismail khan replied to an...
              </Text>
            </View>
            <Ionicons
              name="notifications-off-outline"
              size={16}
              color="#8696a0"
            />
          </TouchableOpacity>

          {/* View All Row */}
          <TouchableOpacity style={styles.viewAllRow} activeOpacity={0.7}>
            <View style={styles.viewAllIconBox}>
              <Ionicons name="chevron-forward" size={18} color="#54656f" />
            </View>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        {/* Section Divider */}
        <View style={styles.sectionDivider} />
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
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "android" ? 12 : 8,
    paddingBottom: 12,
  },
  whatsappTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111111",
  },
  scrollContainer: {
    paddingBottom: 90,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  newCommunityIconContainer: {
    width: 50,
    height: 50,
    position: "relative",
    marginRight: 14,
  },
  iconBackground: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#e2e8f0",
    justifyContent: "center",
    alignItems: "center",
  },
  plusBadge: {
    position: "absolute",
    bottom: -2,
    right: -2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#00a884",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
  },
  divider: {
    height: 1,
    backgroundColor: "#f0f2f5",
    marginVertical: 4,
  },
  communitySection: {
    marginTop: 4,
  },
  communityHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  communityAvatar: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: "#ff9f43",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  communityAvatarText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  communityName: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
  },
  announcementRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 24,
    paddingRight: 16,
    paddingVertical: 10,
  },
  announcementIconBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#e8f8f5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  announcementDetails: {
    flex: 1,
    justifyContent: "center",
  },
  announcementTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111111",
    marginBottom: 2,
  },
  announcementSubtitle: {
    fontSize: 13,
    color: "#667781",
  },
  viewAllRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 24,
    paddingRight: 16,
    paddingVertical: 12,
  },
  viewAllIconBox: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  viewAllText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#54656f",
  },
  sectionDivider: {
    height: 8,
    backgroundColor: "#f0f2f5",
    marginTop: 8,
  },
});
