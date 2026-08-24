import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UpdatesScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const [createChannelModalVisible, setCreateChannelModalVisible] =
    useState(false);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Updates</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search" size={22} color="#111111" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setMenuVisible(!menuVisible)}
          >
            <Ionicons name="ellipsis-vertical" size={22} color="#111111" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Popup Menu */}
      {menuVisible && (
        <View style={styles.popupMenu}>
          <TouchableOpacity
            style={styles.popupItem}
            onPress={() => {
              setMenuVisible(false);
              setCreateChannelModalVisible(true);
            }}
          >
            <Text style={styles.popupText}>Create channel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.popupItem}
            onPress={() => {
              setMenuVisible(false);
              router.push("/status-prvacey");
            }}
          >
            <Text style={styles.popupText}>Status privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.popupItem}
            onPress={() => setMenuVisible(false)}
          >
            <Text style={styles.popupText}>Starred</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.popupItem}
            onPress={() => setMenuVisible(false)}
          >
            <Text style={styles.popupText}>Ad preferences</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Status Section */}
        <Text style={styles.sectionHeader}>Status</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.statusScroll}
        >
          <TouchableOpacity
            style={styles.statusCard}
            onPress={() => router.push("/edit")}
          >
            <View style={styles.myStatusImageContainer}>
              <View style={styles.avatarPlaceholder} />
              <View style={styles.plusBadge}>
                <Ionicons name="add" size={14} color="#ffffff" />
              </View>
            </View>
            <Text style={styles.statusName} numberOfLines={1}>
              My status
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.statusCard}>
            <View style={styles.otherStatusRing}>
              <View style={styles.avatarPlaceholderOther} />
            </View>
            <Text style={styles.statusName} numberOfLines={1}>
              Gulshan
            </Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Channels Section */}
        <View style={styles.channelsHeaderRow}>
          <Text style={styles.sectionHeader}>Channels</Text>
          <TouchableOpacity style={styles.exploreBtn}>
            <Text style={styles.exploreText}>Explore</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.channelItem}>
          <View style={styles.channelAvatar}>
            <Ionicons name="shield-checkmark" size={24} color="#25D366" />
          </View>
          <View style={styles.channelInfo}>
            <View style={styles.channelTitleRow}>
              <Text style={styles.channelName}>Trader</Text>
              <Text style={styles.channelTime}>2:28 AM</Text>
            </View>
            <View style={styles.channelSubtitleRow}>
              <Ionicons
                name="image"
                size={14}
                color="#54656f"
                style={{ marginRight: 4 }}
              />
              <Text style={styles.channelSnippet} numberOfLines={1}>
                🚀 HYPE/USDT UPDATE 🚀...
              </Text>
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>10</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Find Channels Section */}
        <Text style={styles.findChannelsTitle}>
          Stay updated on topics you care about
        </Text>

        <View style={styles.suggestedChannelCard}>
          <View style={styles.suggestedAvatar} />
          <View style={styles.channelInfo}>
            <Text style={styles.channelName}>FIFA World Cup</Text>
            <Text style={styles.channelSnippet}>17.6M followers</Text>
          </View>
          <TouchableOpacity style={styles.followBtn}>
            <Text style={styles.followBtnText}>Follow</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Action Buttons */}
        <View style={styles.bottomActionButtons}>
          <TouchableOpacity style={styles.outlineActionBtn}>
            <Ionicons
              name="grid-outline"
              size={18}
              color="#005c4b"
              style={{ marginRight: 8 }}
            />
            <Text style={styles.outlineActionText}>Explore more</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.outlineActionBtn}
            onPress={() => setCreateChannelModalVisible(true)}
          >
            <Ionicons
              name="add"
              size={20}
              color="#005c4b"
              style={{ marginRight: 6 }}
            />
            <Text style={styles.outlineActionText}>Create channel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Floating Buttons */}
      <View style={styles.floatingButtonsContainer}>
        <TouchableOpacity style={styles.smallFab}>
          <Ionicons name="pencil" size={20} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.largeFab}>
          <Ionicons name="camera" size={22} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Create Channel Bottom Sheet Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={createChannelModalVisible}
        onRequestClose={() => setCreateChannelModalVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setCreateChannelModalVisible(false)}
        >
          <Pressable style={styles.bottomSheetContainer}>
            <View style={styles.sheetIndicator} />

            <View style={styles.broadcastIconContainer}>
              <Ionicons name="chatbubbles" size={42} color="#00a884" />
            </View>

            <Text style={styles.sheetTitle}>
              Create a channel to reach unlimited followers
            </Text>

            <View style={styles.instructionRow}>
              <Ionicons
                name="globe-outline"
                size={22}
                color="#00a884"
                style={styles.instructionIcon}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.instructionHeading}>
                  Anyone can discover your channel
                </Text>
                <Text style={styles.instructionDesc}>
                  Channels are public, so anyone can find them and see 30 days
                  of history.
                </Text>
              </View>
            </View>

            <View style={styles.instructionRow}>
              <Ionicons
                name="eye-off-outline"
                size={22}
                color="#00a884"
                style={styles.instructionIcon}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.instructionHeading}>
                  People see your channel, not you
                </Text>
                <Text style={styles.instructionDesc}>
                  Followers can't see your phone number, profile picture or
                  name, but other admins can.
                </Text>
              </View>
            </View>

            <View style={styles.instructionRow}>
              <Ionicons
                name="shield-checkmark-outline"
                size={22}
                color="#00a884"
                style={styles.instructionIcon}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.instructionHeading}>
                  You're responsible for your channel
                </Text>
                <Text style={styles.instructionDesc}>
                  Your channel needs to follow our{" "}
                  <Text style={styles.guidelinesText}>guidelines</Text> and is
                  reviewed against them.
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => setCreateChannelModalVisible(false)}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: { fontSize: 22, fontWeight: "bold", color: "#111111" },
  headerIcons: { flexDirection: "row", alignItems: "center" },
  iconButton: { padding: 8, marginLeft: 8 },
  popupMenu: {
    position: "absolute",
    top: 55,
    right: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 170,
    zIndex: 100,
    paddingVertical: 6,
  },
  popupItem: { paddingVertical: 12, paddingHorizontal: 16 },
  popupText: { fontSize: 15, color: "#111111" },
  scrollContent: { paddingBottom: 80 },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "600",
    color: "#54656f",
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
  },
  statusScroll: { paddingLeft: 16, marginBottom: 12 },
  statusCard: { alignItems: "center", marginRight: 16, width: 70 },
  myStatusImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  avatarPlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#222",
  },
  plusBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#00a884",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  otherStatusRing: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: "#00a884",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarPlaceholderOther: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#ddd",
  },
  statusName: {
    fontSize: 12,
    color: "#111",
    marginTop: 4,
    textAlign: "center",
  },
  channelsHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 16,
  },
  exploreBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#f0f2f5",
    borderRadius: 16,
  },
  exploreText: { color: "#005c4b", fontWeight: "600", fontSize: 13 },
  channelItem: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
  },
  channelAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#e2e8f0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  channelInfo: { flex: 1 },
  channelTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  channelName: { fontSize: 16, fontWeight: "600", color: "#111" },
  channelTime: { fontSize: 12, color: "#54656f" },
  channelSubtitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  channelSnippet: { fontSize: 14, color: "#54656f", flex: 1 },
  unreadBadge: {
    backgroundColor: "#00a884",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: "center",
  },
  unreadText: { color: "#fff", fontSize: 11, fontWeight: "bold" },
  findChannelsTitle: {
    fontSize: 14,
    color: "#54656f",
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  suggestedChannelCard: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
  },
  suggestedAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#cbd5e1",
    marginRight: 12,
  },
  followBtn: {
    backgroundColor: "#e7f8f2",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  followBtnText: { color: "#00a884", fontWeight: "600", fontSize: 14 },
  bottomActionButtons: { marginTop: 16, paddingHorizontal: 16, gap: 10 },
  outlineActionBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 24,
    paddingVertical: 12,
  },
  outlineActionText: { color: "#005c4b", fontSize: 15, fontWeight: "600" },
  floatingButtonsContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    alignItems: "center",
    gap: 12,
  },
  smallFab: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f2f5",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  largeFab: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#00a884",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  bottomSheetContainer: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingBottom: 32,
    paddingTop: 12,
  },
  sheetIndicator: {
    width: 36,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#cbd5e1",
    alignSelf: "center",
    marginBottom: 20,
  },
  broadcastIconContainer: { alignSelf: "center", marginBottom: 16 },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  instructionRow: { flexDirection: "row", marginBottom: 20 },
  instructionIcon: { marginRight: 16, marginTop: 2 },
  instructionHeading: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    marginBottom: 2,
  },
  instructionDesc: { fontSize: 13, color: "#54656f", lineHeight: 18 },
  guidelinesText: { color: "#005c4b", fontWeight: "600" },
  continueButton: {
    backgroundColor: "#00a884",
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },
  continueButtonText: { color: "#ffffff", fontSize: 16, fontWeight: "bold" },
});
