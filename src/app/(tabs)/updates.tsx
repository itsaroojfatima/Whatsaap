import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Modal,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const channelsData = [
  {
    id: "1",
    name: "VU TOOLKIT (Backup)",
    message: "Han i love depression anxiety an...",
    time: "6:07 PM",
    unreadCount: 23,
    verified: true,
  },
  {
    id: "2",
    name: "Learn English with Vocabin...",
    message: "Photo 📷",
    time: "5:25 PM",
    unreadCount: 3,
    verified: true,
  },
  {
    id: "3",
    name: "Ai Prompt Gemini Photo Ed...",
    message: "Voice message (0:20)",
    time: "2:19 PM",
    unreadCount: 0,
    verified: true,
  },
  {
    id: "4",
    name: "Jobs",
    message: "https://whatsapp.com/chan...",
    time: "Yesterday",
    unreadCount: 0,
    verified: true,
  },
];

export default function UpdatesScreen() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.whatsappTitle}>Updates</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.6}>
            <Ionicons name="camera-outline" size={24} color="#54656f" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.6}>
            <Ionicons name="search" size={22} color="#54656f" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setMenuVisible(true)}
            activeOpacity={0.6}
          >
            <Ionicons name="ellipsis-vertical" size={22} color="#54656f" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Popup Menu Modal */}
      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.popupMenu}>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setMenuVisible(false)}
                >
                  <Text style={styles.menuText}>Status privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setMenuVisible(false)}
                >
                  <Text style={styles.menuText}>Create channel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setMenuVisible(false)}
                >
                  <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Status Section */}
        <Text style={styles.sectionTitle}>Status</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.statusScroll}
        >
          {/* Add Status Item */}
          <View style={styles.statusItemContainer}>
            <View style={styles.addStatusCircle}>
              <View style={styles.myAvatarPlaceholder}>
                <Text style={styles.avatarInitial}>M</Text>
              </View>
              <View style={styles.plusBadge}>
                <Ionicons name="add" size={14} color="#ffffff" />
              </View>
            </View>
            <Text style={styles.statusName} numberOfLines={1}>
              Add status
            </Text>
          </View>

          {/* Other Status Items */}
          {[
            { name: "That funny...", initial: "T" },
            { name: "Maryam Uni", initial: "M" },
            { name: "Arain Zaad...", initial: "A" },
          ].map((item, index) => (
            <View key={index} style={styles.statusItemContainer}>
              <View style={styles.statusRing}>
                <View style={styles.statusAvatar}>
                  <Text style={styles.avatarInitial}>{item.initial}</Text>
                </View>
              </View>
              <Text style={styles.statusName} numberOfLines={1}>
                {item.name}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Channels Section Header */}
        <View style={styles.channelsHeaderRow}>
          <Text style={styles.sectionTitle}>Channels</Text>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreText}>Explore</Text>
          </TouchableOpacity>
        </View>

        {/* Channels List */}
        {channelsData.map((channel) => (
          <TouchableOpacity key={channel.id} style={styles.channelItem}>
            <View style={styles.channelAvatar}>
              <Text style={styles.channelAvatarText}>{channel.name[0]}</Text>
            </View>
            <View style={styles.channelDetails}>
              <View style={styles.channelNameRow}>
                <Text style={styles.channelName} numberOfLines={1}>
                  {channel.name}
                </Text>
                {channel.verified && (
                  <Ionicons
                    name="checkmark-circle"
                    size={14}
                    color="#00a884"
                    style={{ marginLeft: 4 }}
                  />
                )}
              </View>
              <Text style={styles.channelMessage} numberOfLines={1}>
                {channel.message}
              </Text>
            </View>
            <View style={styles.channelRightCol}>
              <Text style={styles.channelTime}>{channel.time}</Text>
              {channel.unreadCount > 0 && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadBadgeText}>
                    {channel.unreadCount}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Floating Action Buttons */}
      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.pencilFab}>
          <Ionicons name="pencil" size={18} color="#111111" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraFab}>
          <Ionicons name="camera" size={22} color="#ffffff" />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "android" ? 12 : 8,
    paddingBottom: 12,
  },
  whatsappTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00a884",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.05)",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  popupMenu: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginTop: Platform.OS === "android" ? 60 : 50,
    marginRight: 12,
    width: 170,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    paddingVertical: 6,
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 15,
    color: "#111111",
  },
  scrollContainer: {
    paddingBottom: 90,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111111",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  statusScroll: {
    paddingLeft: 16,
    marginBottom: 16,
  },
  statusItemContainer: {
    alignItems: "center",
    marginRight: 14,
    width: 68,
  },
  addStatusCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#f0f2f5",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 6,
  },
  myAvatarPlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#687684",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarInitial: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  plusBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#00a884",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  statusRing: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 2.5,
    borderColor: "#00a884",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  statusAvatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#687684",
    justifyContent: "center",
    alignItems: "center",
  },
  statusName: {
    fontSize: 12,
    color: "#111111",
    textAlign: "center",
  },
  channelsHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    marginTop: 4,
  },
  exploreButton: {
    backgroundColor: "#e8f8f5",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  exploreText: {
    color: "#00a884",
    fontWeight: "600",
    fontSize: 14,
  },
  channelItem: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
  },
  channelAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#687684",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  channelAvatarText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  channelDetails: {
    flex: 1,
    justifyContent: "center",
  },
  channelNameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  channelName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
  },
  channelMessage: {
    fontSize: 14,
    color: "#667781",
  },
  channelRightCol: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  channelTime: {
    fontSize: 12,
    color: "#667781",
    marginBottom: 4,
  },
  unreadBadge: {
    backgroundColor: "#00a884",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  unreadBadgeText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "bold",
  },
  fabContainer: {
    position: "absolute",
    right: 16,
    bottom: 20,
    alignItems: "center",
  },
  pencilFab: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#f0f2f5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cameraFab: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#005c4b",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
