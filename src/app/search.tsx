import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const searchFilters = [
  { name: "Unread", icon: "mail-outline" },
  { name: "Photos", icon: "image-outline" },
  { name: "Videos", icon: "videocam-outline" },
  { name: "Links", icon: "link-outline" },
  { name: "GIFs", icon: "refresh-circle-outline" },
  { name: "Audio", icon: "headset-outline" },
  { name: "Documents", icon: "document-text-outline" },
  { name: "Polls", icon: "stats-chart-outline" },
  { name: "Contacts", icon: "person-outline" },
  { name: "Non-contacts", icon: "person-add-outline" },
];

export default function SearchScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#54656f" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Ask Meta AI or Search"
          placeholderTextColor="#8696a0"
          autoFocus={true}
        />
      </View>

      {/* Filter Chips Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipsScrollView}
      >
        {searchFilters.map((filter, index) => (
          <TouchableOpacity key={index} style={styles.chip}>
            <Ionicons
              name={filter.icon as any}
              size={18}
              color="#54656f"
              style={{ marginRight: 6 }}
            />
            <Text style={styles.chipText}>{filter.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Recent Searches */}
      <View style={styles.recentHeader}>
        <Text style={styles.recentTitle}>Recent searches</Text>
        <TouchableOpacity>
          <Text style={styles.clearAllText}>Clear all</Text>
        </TouchableOpacity>
      </View>

      {/* Example Item */}
      <TouchableOpacity style={styles.item}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>M</Text>
        </View>
        <Text style={styles.itemName}>Maryam Butt</Text>
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
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  backButton: {
    marginRight: 15,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 45,
    fontSize: 16,
    color: "#111",
  },
  chipsScrollView: {
    paddingLeft: 16,
    marginTop: 10,
    flexGrow: 0,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 10,
  },
  chipText: {
    fontSize: 14,
    color: "#3b4a54",
  },
  recentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 15,
    marginBottom: 10,
  },
  recentTitle: {
    color: "#667781",
    fontSize: 14,
  },
  clearAllText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "600",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#687684",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatarText: {
    color: "#fff",
    fontSize: 20,
  },
  itemName: {
    fontSize: 16,
    color: "#111",
  },
});
