import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Sample Contacts Data matching WhatsApp style
const CONTACTS_DATA = [
  {
    id: "1",
    name: "182 (You)",
    subtitle: "Message yourself",
    isSelf: true,
  },
  {
    id: "2",
    name: ".",
    subtitle: "",
  },
  {
    id: "3",
    name: "👑Arain Zaadi👑",
    subtitle: "Chasing goals, not people 🙃🤍",
  },
  {
    id: "4",
    name: "Abas dera",
    subtitle: "",
  },
  {
    id: "5",
    name: "Abrar Ahmad 182",
    subtitle: "",
  },
  {
    id: "6",
    name: "Ada 6",
    subtitle: "",
  },
];

export default function SelectContactScreen() {
  const router = useRouter();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const renderContactItem = ({ item }: { item: (typeof CONTACTS_DATA)[0] }) => (
    <TouchableOpacity style={styles.contactRow} activeOpacity={0.7}>
      <View style={styles.avatarContainer}>
        {item.isSelf ? (
          <View style={styles.selfAvatar}>
            <Ionicons name="person" size={22} color="#ffffff" />
          </View>
        ) : (
          <View style={styles.defaultAvatar}>
            <Ionicons name="person" size={22} color="#ffffff" />
          </View>
        )}
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName} numberOfLines={1}>
          {item.name}
        </Text>
        {item.subtitle ? (
          <Text style={styles.contactSubtitle} numberOfLines={1}>
            {item.subtitle}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.iconButton}
        >
          <Ionicons name="arrow-back" size={24} color="#54656f" />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Select contact</Text>
          <Text style={styles.headerSubtitle}>138 contacts</Text>
        </View>

        <View style={styles.headerRightIcons}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Ionicons name="search" size={22} color="#54656f" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            activeOpacity={0.7}
            onPress={() => setIsMenuVisible(true)}
          >
            <Ionicons name="ellipsis-vertical" size={22} color="#54656f" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable / FlatList Content */}
      <FlatList
        data={CONTACTS_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
        ListHeaderComponent={
          <View style={styles.topActionsContainer}>
            {/* New Group */}
            <TouchableOpacity style={styles.actionRow} activeOpacity={0.7}>
              <View style={styles.actionIconCircle}>
                <Ionicons name="people" size={20} color="#ffffff" />
              </View>
              <Text style={styles.actionText}>New group</Text>
            </TouchableOpacity>

            {/* New Contact */}
            <TouchableOpacity style={styles.actionRow} activeOpacity={0.7}>
              <View style={styles.actionIconCircle}>
                <Ionicons name="person-add" size={18} color="#ffffff" />
              </View>
              <Text style={styles.actionText}>New contact</Text>
              <View style={styles.qrContainer}>
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={20}
                  color="#54656f"
                />
              </View>
            </TouchableOpacity>

            {/* New Community */}
            <TouchableOpacity style={styles.actionRow} activeOpacity={0.7}>
              <View style={styles.actionIconCircle}>
                <MaterialCommunityIcons
                  name="account-group"
                  size={20}
                  color="#ffffff"
                />
              </View>
              <Text style={styles.actionText}>New community</Text>
            </TouchableOpacity>

            {/* Section Header */}
            <Text style={styles.sectionHeaderLabel}>Contacts on WhatsApp</Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Popup Menu Modal (Three Dots Menu) */}
      <Modal
        visible={isMenuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsMenuVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsMenuVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.popupMenu}>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setIsMenuVisible(false)}
                >
                  <Text style={styles.menuItemText}>Contact settings</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setIsMenuVisible(false)}
                >
                  <Text style={styles.menuItemText}>Invite a friend</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setIsMenuVisible(false)}
                >
                  <Text style={styles.menuItemText}>Contacts</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setIsMenuVisible(false)}
                >
                  <Text style={styles.menuItemText}>Refresh</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setIsMenuVisible(false)}
                >
                  <Text style={styles.menuItemText}>Help</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
  },
  iconButton: {
    padding: 8,
  },
  headerTitleContainer: {
    flex: 1,
    marginLeft: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#111111",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#54656f",
    marginTop: 1,
  },
  headerRightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  listContent: {
    paddingBottom: 20,
  },
  topActionsContainer: {
    paddingTop: 6,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  actionIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#00643b",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  actionText: {
    flex: 1,
    fontSize: 16,
    color: "#111111",
    fontWeight: "500",
  },
  qrContainer: {
    padding: 4,
  },
  sectionHeaderLabel: {
    fontSize: 13,
    color: "#54656f",
    fontWeight: "600",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#ffffff",
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  avatarContainer: {
    marginRight: 16,
  },
  selfAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#54656f",
    justifyContent: "center",
    alignItems: "center",
  },
  defaultAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#8696a0",
    justifyContent: "center",
    alignItems: "center",
  },
  contactInfo: {
    flex: 1,
    justifyContent: "center",
  },
  contactName: {
    fontSize: 16,
    color: "#111111",
    fontWeight: "400",
  },
  contactSubtitle: {
    fontSize: 13,
    color: "#54656f",
    marginTop: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "transparent",
  },
  popupMenu: {
    position: "absolute",
    top: 50,
    right: 15,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    width: 180,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 6,
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  menuItemText: {
    fontSize: 15,
    color: "#111111",
  },
});
