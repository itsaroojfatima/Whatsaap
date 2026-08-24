import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  FlatList,
  Modal,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import AddIcon from "@/assets/icons/add-svg";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface ChatItem {
  id: string;
  name: string;
  message: string;
  time: string;
  unread: boolean;
  unreadCount?: number;
  isGroup: boolean;
  isFavorite: boolean;
}

const chatData: ChatItem[] = [
  {
    id: "1",
    name: "Him 💔💋🫄",
    message: 'You reacted ❤️ to "okey jaaan"',
    time: "7:08 AM",
    unread: false,
    isGroup: false,
    isFavorite: true,
  },
  {
    id: "2",
    name: "Hadi Ch",
    message: "Acha weli ho k kra gi",
    time: "7:06 AM",
    unread: false,
    isGroup: false,
    isFavorite: true,
  },
  {
    id: "3",
    name: "Uni Legends 🤕🤭",
    message: "You reacted 👍 to 🎙️ Voice message (...",
    time: "Yesterday",
    unread: false,
    isGroup: true,
    isFavorite: false,
  },
  {
    id: "4",
    name: "Chaos crew🤕",
    message: "Shella: Lanat 🖐️ ber dushmanane...",
    time: "Yesterday",
    unread: true,
    unreadCount: 3,
    isGroup: true,
    isFavorite: false,
  },
  {
    id: "5",
    name: "Uni fellows",
    message: "Samar: Phir kesy tumhay maza ch...",
    time: "Yesterday",
    unread: true,
    unreadCount: 1,
    isGroup: true,
    isFavorite: false,
  },
  {
    id: "6",
    name: "Chamber of secrets🙃❤️‍🔥💕",
    message: 'You reacted 😂 to "🤣🤣"',
    time: "Yesterday",
    unread: false,
    isGroup: true,
    isFavorite: true,
  },
];

const filters = ["All", "Unread", "Favorites", "Groups"];

export default function ChatsScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuVisible, setMenuVisible] = useState(false);

  const filteredChats = chatData.filter((item) => {
    if (activeFilter === "Unread") {
      return item.unread;
    }
    if (activeFilter === "Favorites") {
      return item.isFavorite;
    }
    if (activeFilter === "Groups") {
      return item.isGroup;
    }
    return true; // "All"
  });

  const renderItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity
      style={styles.chatItem}
      activeOpacity={0.7}
      onPress={() => {
        router.push({
          pathname: "/chat",
          params: {
            name: item.name,
            isGroup: item.isGroup ? "true" : "false",
            id: item.id,
          },
        } as any);
      }}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.name[0]}</Text>
      </View>

      <View style={styles.chatDetails}>
        <View style={styles.chatHeaderRow}>
          <Text style={styles.chatName} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={[styles.chatTime, item.unread && styles.unreadText]}>
            {item.time}
          </Text>
        </View>
        <View style={styles.chatMessageRow}>
          <Text
            style={[styles.chatMessage, item.unread && styles.unreadMessage]}
            numberOfLines={1}
          >
            {item.message}
          </Text>
          {item.unread && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>
                {item.unreadCount || 1}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.whatsappTitle}>WhatsApp</Text>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setMenuVisible(true)}
          activeOpacity={0.6}
        >
          <Ionicons name="ellipsis-vertical" size={22} color="#54656f" />
        </TouchableOpacity>
      </View>

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
                  onPress={() => {
                    setMenuVisible(false);
                    router.push("/new-group");
                  }}
                >
                  <Text style={styles.menuText}>New group</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                  }}
                >
                  <Text style={styles.menuText}>New community</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                  }}
                >
                  <Text style={styles.menuText}>Broadcast lists</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                    router.push("/linked-devices" as any);
                  }}
                >
                  <Text style={styles.menuText}>Linked devices</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                  }}
                >
                  <Text style={styles.menuText}>Starred</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                  }}
                >
                  <Text style={styles.menuText}>Read all</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                  }}
                >
                  <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Search Bar Wrapper */}
      <TouchableOpacity
        style={styles.searchContainer}
        activeOpacity={0.9}
        onPress={() => router.push("/search" as any)}
      >
        <View style={styles.searchBar}>
          <Ionicons
            name="search"
            size={18}
            color="#54656f"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Ask Meta AI or Search"
            placeholderTextColor="#8696a0"
            editable={false}
            pointerEvents="none"
          />
        </View>
      </TouchableOpacity>

      {/* Filter Chips */}
      <View style={styles.filtersContainer}>
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <TouchableOpacity
              key={filter}
              style={[
                styles.chip,
                isActive ? styles.activeChip : styles.inactiveChip,
              ]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text
                style={[
                  styles.chipText,
                  isActive ? styles.activeChipText : styles.inactiveChipText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity style={styles.plusChip}>
          <Ionicons name="add" size={18} color="#54656f" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Chat List */}
      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No chats in {activeFilter}</Text>
            <Text style={styles.emptySubtitle}>
              Tap another filter to see other chats
            </Text>
          </View>
        }
      />

      {/* Floating Buttons */}
      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.metaAiPill}>
          <MaterialCommunityIcons
            name="star-four-points"
            size={18}
            color="#7b36f7"
            style={{ marginRight: 6 }}
          />
          <Text style={styles.metaAiText}>Ask Meta AI</Text>
        </TouchableOpacity>

        {/* Plus Button routes to Select Contact screen */}
        <TouchableOpacity
          style={styles.fabButton}
          activeOpacity={0.8}
          onPress={() => router.push("/select-contact" as any)}
        >
          <AddIcon />
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
    zIndex: 10,
  },
  whatsappTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00a884",
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  popupMenu: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginTop: Platform.OS === "android" ? 60 : 50,
    marginRight: 12,
    width: 210,
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
  searchContainer: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
    borderRadius: 24,
    paddingHorizontal: 12,
    height: 42,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#111",
  },
  filtersContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 12,
    alignItems: "center",
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  activeChip: {
    backgroundColor: "#d8fdd2",
  },
  inactiveChip: {
    backgroundColor: "#f0f2f5",
  },
  chipText: {
    fontSize: 13,
    fontWeight: "500",
  },
  activeChipText: {
    color: "#005c4b",
  },
  inactiveChipText: {
    color: "#54656f",
  },
  plusChip: {
    backgroundColor: "#f0f2f5",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 2,
  },
  listContainer: {
    paddingBottom: 90,
  },
  chatItem: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#687684",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  avatarText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  chatDetails: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: "#f0f2f5",
    paddingBottom: 10,
  },
  chatHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
    flex: 1,
    marginRight: 8,
  },
  chatTime: {
    fontSize: 12,
    color: "#111111",
    fontWeight: "500",
  },
  unreadText: {
    color: "#111111", // Changed from green to dark/black as requested
    fontWeight: "bold",
  },
  chatMessageRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chatMessage: {
    fontSize: 14,
    color: "#667781",
    flex: 1,
    marginRight: 6,
  },
  unreadMessage: {
    color: "#111111",
    fontWeight: "500",
  },
  unreadBadge: {
    backgroundColor: "#25D366",
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  unreadBadgeText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "bold",
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
    paddingHorizontal: 24,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 13,
    color: "#8696a0",
    textAlign: "center",
  },
  fabContainer: {
    position: "absolute",
    right: 16,
    bottom: 20,
    alignItems: "flex-end",
  },
  metaAiPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 22,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  metaAiText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111111",
  },
  fabButton: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#005c4b",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
