import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Contacts Data
const FREQUENT_CONTACTS = [
  { id: "1", name: "Him 💔💋🫄" },
  { id: "2", name: "Faqia" },
  { id: "3", name: "Soulmate" },
];

const ALL_CONTACTS = [
  { id: "4", name: "Mri Muhtrma" },
  { id: "5", name: "Malika" },
  { id: "6", name: "Maryam Butt" },
  { id: "7", name: "Rabo äpi" },
  { id: "8", name: "Ayesha" },
];

export default function NewGroupScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

  // Toggle contact selection
  const toggleContactSelection = (id: string) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter((item) => item !== id));
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  const sectionedData = [
    { type: "HEADER", title: "Frequently contacted" },
    ...FREQUENT_CONTACTS.map((item) => ({ ...item, type: "CONTACT" })),
    ...ALL_CONTACTS.map((item) => ({ ...item, type: "CONTACT" })),
  ];

  const renderItem = ({ item }: { item: any }) => {
    if (item.type === "HEADER") {
      return (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{item.title}</Text>
        </View>
      );
    }

    const isSelected = selectedContacts.includes(item.id);

    return (
      <TouchableOpacity
        style={styles.contactItem}
        activeOpacity={0.7}
        onPress={() => toggleContactSelection(item.id)}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.name[0]}</Text>
        </View>

        <View style={styles.contactDetails}>
          <Text style={styles.contactName} numberOfLines={1}>
            {item.name}
          </Text>
        </View>

        <View style={[styles.checkbox, isSelected && styles.selectedCheckbox]}>
          {isSelected && (
            <Ionicons name="checkmark" size={14} color="#ffffff" />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header with Search Bar */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#54656f" />
        </TouchableOpacity>

        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Name, number, @username"
            placeholderTextColor="#8696a0"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          {isSearchFocused ? (
            <MaterialCommunityIcons
              name="dialpad"
              size={20}
              color="#54656f"
              style={styles.rightIcon}
            />
          ) : (
            <MaterialCommunityIcons
              name="view-grid-outline"
              size={20}
              color="#54656f"
              style={styles.rightIcon}
            />
          )}
        </View>
      </View>

      {/* New Contact Option */}
      <TouchableOpacity
        style={styles.newContactRow}
        activeOpacity={0.7}
        onPress={() => router.push("/add-contact")}
      >
        <View style={styles.newContactIconContainer}>
          <Ionicons name="person-add" size={20} color="#ffffff" />
        </View>
        <Text style={styles.newContactText}>New contact</Text>
      </TouchableOpacity>

      {/* Contacts List */}
      <FlatList
        data={sectionedData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating Action Button (Arrow Forward) - Ab clickable hai */}
      {selectedContacts.length > 0 && (
        <TouchableOpacity
          style={styles.fabButton}
          activeOpacity={0.8}
          onPress={() => {
            // Yahan aap apni next screen ka path de dein (misal ke tor par group info ya chat screen)
            router.push("/add-new-contact");
          }}
        >
          <Ionicons name="arrow-forward" size={24} color="#ffffff" />
        </TouchableOpacity>
      )}
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
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#f0f2f5",
  },
  backButton: {
    padding: 4,
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 44,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#111111",
  },
  rightIcon: {
    marginLeft: 8,
  },
  newContactRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  newContactIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#00a884",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  newContactText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111111",
  },
  sectionHeader: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#54656f",
  },
  listContainer: {
    paddingBottom: 90,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#687684",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  avatarText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  contactDetails: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111111",
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#8696a0",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedCheckbox: {
    backgroundColor: "#00a884",
    borderColor: "#00a884",
  },
  fabButton: {
    position: "absolute",
    right: 20,
    bottom: 25,
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#005c4b",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
});
