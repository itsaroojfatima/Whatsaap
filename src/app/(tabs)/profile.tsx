import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileSettingsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#f7f8f9" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Top Header with Action Icons */}
        <View style={styles.topHeaderSection}>
          <View style={styles.headerIconsRow}>
            <TouchableOpacity style={styles.headerIconBtn}>
              <Ionicons name="search" size={20} color="#111111" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconBtn}>
              <Ionicons name="share-social-outline" size={20} color="#111111" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconBtn}>
              <Ionicons name="create-outline" size={20} color="#111111" />
            </TouchableOpacity>
          </View>

          {/* Status Bubble */}
          <View style={styles.statusBubbleWrapper}>
            <View style={styles.statusBubble}>
              <Text style={styles.statusText}>Monday motivation</Text>
            </View>
          </View>

          {/* Profile Avatar */}
          <View style={styles.avatarContainer}>
            <View style={styles.avatarPlaceholder}>
              <Ionicons name="person" size={45} color="#ffffff" />
            </View>
          </View>

          {/* Updated Name */}
          <View style={styles.nameRow}>
            <Text style={styles.profileName}>Skull Breaker</Text>
            <Ionicons
              name="chevron-down"
              size={16}
              color="#54656f"
              style={{ marginLeft: 4 }}
            />
          </View>
        </View>

        {/* White Content Body */}
        <View style={styles.bodyContainer}>
          {/* Settings List Items */}
          <View style={styles.listSection}>
            <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
              <Ionicons
                name="diamond-outline"
                size={22}
                color="#54656f"
                style={styles.itemIcon}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemTitle}>Subscriptions</Text>
                <Text style={styles.itemSubtitle} numberOfLines={1}>
                  Explore premium benefits
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
              <Ionicons
                name="key-outline"
                size={22}
                color="#54656f"
                style={styles.itemIcon}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemTitle}>Account</Text>
                <Text style={styles.itemSubtitle} numberOfLines={1}>
                  Security notifications, change number
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
              <Ionicons
                name="lock-closed-outline"
                size={22}
                color="#54656f"
                style={styles.itemIcon}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemTitle}>Privacy</Text>
                <Text style={styles.itemSubtitle} numberOfLines={1}>
                  Blocked accounts, disappearing messages
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
              <Ionicons
                name="list-outline"
                size={22}
                color="#54656f"
                style={styles.itemIcon}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemTitle}>Lists</Text>
                <Text style={styles.itemSubtitle} numberOfLines={1}>
                  Manage people and groups
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
              <Ionicons
                name="chatbubble-outline"
                size={22}
                color="#54656f"
                style={styles.itemIcon}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemTitle}>Chats</Text>
                <Text style={styles.itemSubtitle} numberOfLines={1}>
                  Chat history, backup
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
              <Ionicons
                name="color-palette-outline"
                size={22}
                color="#54656f"
                style={styles.itemIcon}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemTitle}>Appearance</Text>
                <Text style={styles.itemSubtitle} numberOfLines={1}>
                  Chat theme, app icon, app theme
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color="#54656f"
                style={styles.itemIcon}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemTitle}>Notifications</Text>
                <Text style={styles.itemSubtitle} numberOfLines={1}>
                  Message, group & call tones
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
              <Ionicons
                name="server-outline"
                size={22}
                color="#54656f"
                style={styles.itemIcon}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemTitle}>Storage and data</Text>
                <Text style={styles.itemSubtitle} numberOfLines={1}>
                  Network usage, auto-download
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
              <Ionicons
                name="shield-outline"
                size={22}
                color="#54656f"
                style={styles.itemIcon}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemTitle}>Parental controls</Text>
                <Text style={styles.itemSubtitle} numberOfLines={1}>
                  Manage controls for teens
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
              <Ionicons
                name="accessibility-outline"
                size={22}
                color="#54656f"
                style={styles.itemIcon}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemTitle}>Accessibility</Text>
                <Text style={styles.itemSubtitle} numberOfLines={1}>
                  Display and interaction settings
                </Text>
              </View>
            </TouchableOpacity>
          </View>
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
  scrollContainer: {
    paddingBottom: 30,
  },
  topHeaderSection: {
    backgroundColor: "#f7f9f8",
    paddingTop: 8,
    paddingBottom: 20,
    alignItems: "center",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerIconsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  headerIconBtn: {
    padding: 8,
    marginLeft: 8,
  },
  statusBubbleWrapper: {
    alignItems: "center",
    marginBottom: 10,
  },
  statusBubble: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statusText: {
    fontSize: 13,
    color: "#3b4a54",
    fontWeight: "500",
  },
  avatarContainer: {
    marginBottom: 8,
  },
  avatarPlaceholder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111111",
  },
  bodyContainer: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  listSection: {
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  itemIcon: {
    width: 28,
    textAlign: "center",
    marginRight: 16,
  },
  itemTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#111111",
  },
  itemSubtitle: {
    fontSize: 12,
    color: "#667781",
    marginTop: 1,
  },
});
