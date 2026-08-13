import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const chatData = [
  {
    id: "1",
    name: "Him 💔💋🫄",
    message: 'You reacted ❤️ to "okey jaaan"',
    time: "7:08 AM",
    unread: false,
  },
  {
    id: "2",
    name: "Hadi Ch",
    message: "Acha weli ho k kra gi",
    time: "7:06 AM",
    unread: false,
  },
  {
    id: "3",
    name: "Uni Legends 🤕🤭",
    message: "You reacted 👍 to 🎙️ Voice message (...",
    time: "Yesterday",
    unread: false,
  },
  {
    id: "4",
    name: "Chaos crew🤕",
    message: "Shella: Lanat 🖐️ ber dushmanane...",
    time: "Yesterday",
    unread: true,
  },
  {
    id: "5",
    name: "Uni fellows",
    message: "Samar: Phir kesy tumhay maza ch...",
    time: "Yesterday",
    unread: true,
  },
  {
    id: "6",
    name: "Chamber of secrets🙃❤️‍🔥💕",
    message: 'You reacted 😂 to "🤣🤣"',
    time: "Yesterday",
    unread: false,
  },
];

const filters = ["All", "Unread", "Favorites", "Groups"];

export default function ChatsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.chatItem}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.name[0]}</Text>
      </View>

      {/* Chat Info */}
      <View style={styles.chatDetails}>
        <View style={styles.chatHeaderRow}>
          <Text style={styles.chatName} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={[styles.chatTime, item.unread && styles.unreadText]}>
            {item.time}
          </Text>
        </View>
        <Text
          style={[styles.chatMessage, item.unread && styles.unreadMessage]}
          numberOfLines={1}
        >
          {item.message}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* 1. Header: WhatsApp title & 3-dots menu */}
      <View style={styles.header}>
        <Text style={styles.whatsappTitle}>WhatsApp</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="camera-outline" size={22} color="#54656f" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="ellipsis-vertical" size={20} color="#54656f" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 2. Search Bar / Ask Meta AI */}
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
            placeholder="Ask Meta AI or Search"
            placeholderTextColor="#8696a0"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* 3. Filter Chips */}
      <View style={styles.filtersContainer}>
        <TouchableOpacity style={styles.plusChip}>
          <Ionicons name="add" size={18} color="#54656f" />
        </TouchableOpacity>
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
      </View>

      {/* 4. Chat List */}
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
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
    paddingVertical: 10,
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
    marginLeft: 16,
    padding: 4,
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
  plusChip: {
    backgroundColor: "#f0f2f5",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
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
  listContainer: {
    paddingBottom: 20,
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
    color: "#667781",
  },
  unreadText: {
    color: "#00a884",
    fontWeight: "bold",
  },
  chatMessage: {
    fontSize: 14,
    color: "#667781",
  },
  unreadMessage: {
    color: "#111111",
    fontWeight: "500",
  },
});
