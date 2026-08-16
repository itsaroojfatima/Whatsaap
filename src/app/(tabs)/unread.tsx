import AddIcon from "@/assets/icons/add-svg";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
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
import { SafeAreaView } from "react-native-safe-area-context";

export default function UnreadScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);

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
                  <Text style={styles.menuText}>New group</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setMenuVisible(false)}
                >
                  <Text style={styles.menuText}>New community</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setMenuVisible(false)}
                >
                  <Text style={styles.menuText}>Broadcast lists</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setMenuVisible(false)}
                >
                  <Text style={styles.menuText}>Linked devices</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setMenuVisible(false)}
                >
                  <Text style={styles.menuText}>Starred</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setMenuVisible(false)}
                >
                  <Text style={styles.menuText}>Read all</Text>
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

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons
            name="search"
            size={18}
            color="#54656f"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Search unread chats"
            placeholderTextColor="#8696a0"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Filter Chips */}
      <View style={styles.filtersContainer}>
        <TouchableOpacity
          style={styles.inactiveChip}
          onPress={() => router.push("/(tabs)/chats")}
        >
          <Text style={styles.inactiveChipText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.activeChip}>
          <Text style={styles.activeChipText}>Unread</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inactiveChip}>
          <Text style={styles.inactiveChipText}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inactiveChip}>
          <Text style={styles.inactiveChipText}>Groups</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.plusChip}>
          <Ionicons name="add" size={18} color="#54656f" />
        </TouchableOpacity>
      </View>

      {/* Empty State View */}
      <View style={styles.emptyContainer}>
        <View style={styles.emptyIconCircle}>
          <Ionicons name="checkmark" size={32} color="#00a884" />
        </View>
        <Text style={styles.emptyTitle}>No unread chats</Text>
        <Text style={styles.emptySubtitle}>You're all caught up.</Text>
        <TouchableOpacity onPress={() => router.push("/(tabs)/chats")}>
          <Text style={styles.viewAllText}>View all chats</Text>
        </TouchableOpacity>
      </View>

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
        <TouchableOpacity style={styles.fabButton}>
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
    backgroundColor: "rgba(0,0,0,0.05)",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  popupMenu: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginTop: Platform.OS === "android" ? 60 : 50,
    marginRight: 12,
    width: 210,
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
  activeChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    backgroundColor: "#d8fdd2",
  },
  inactiveChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    backgroundColor: "#f0f2f5",
  },
  activeChipText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#005c4b",
  },
  inactiveChipText: {
    fontSize: 13,
    fontWeight: "500",
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
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
  },
  emptyIconCircle: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderWidth: 1.5,
    borderColor: "#00a884",
    backgroundColor: "#e8f8f5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111111",
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#667781",
    marginBottom: 14,
  },
  viewAllText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#005c4b",
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
    elevation: 4,
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
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
