import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const callsData = [
  {
    id: "1",
    name: "Faqia",
    time: "August 11, 12:38 PM",
    type: "incoming-missed",
    isvideo: true,
  },
  {
    id: "2",
    name: "Farwa",
    time: "August 11, 9:51 AM",
    type: "outgoing",
    isvideo: false,
  },
  {
    id: "3",
    name: "Him ❤️💋🔐",
    time: "July 31, 7:44 AM",
    type: "outgoing",
    isvideo: false,
  },
  {
    id: "4",
    name: "Him ❤️💋🔐 (2)",
    time: "July 19, 8:14 PM",
    type: "outgoing",
    isvideo: false,
  },
  {
    id: "5",
    name: "Him ❤️💋🔐",
    time: "July 19, 12:55 PM",
    type: "incoming-missed",
    isvideo: false,
  },
  {
    id: "6",
    name: "Faqia",
    time: "July 15, 9:48 PM",
    type: "incoming-missed",
    isvideo: false,
  },
];

export default function CallsScreen() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.whatsappTitle}>Calls</Text>
        <View style={styles.headerIcons}>
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
                  <Text style={styles.menuText}>Clear call log</Text>
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
        {/* Top Action Buttons */}
        <View style={styles.actionButtonsRow}>
          <Pressable style={styles.actionButtonContainer}>
            {({ pressed }) => (
              <>
                <View
                  style={[
                    styles.actionCircle,
                    pressed && styles.actionCircleActive,
                  ]}
                >
                  <Ionicons name="call" size={20} color="#000000" />
                </View>
                <Text style={styles.actionText}>Call</Text>
              </>
            )}
          </Pressable>

          <Pressable style={styles.actionButtonContainer}>
            {({ pressed }) => (
              <>
                <View
                  style={[
                    styles.actionCircle,
                    pressed && styles.actionCircleActive,
                  ]}
                >
                  <Ionicons name="calendar-outline" size={20} color="#000000" />
                </View>
                <Text style={styles.actionText}>Schedule</Text>
              </>
            )}
          </Pressable>

          <Pressable style={styles.actionButtonContainer}>
            {({ pressed }) => (
              <>
                <View
                  style={[
                    styles.actionCircle,
                    pressed && styles.actionCircleActive,
                  ]}
                >
                  <Ionicons name="keypad-outline" size={20} color="#000000" />
                </View>
                <Text style={styles.actionText}>Keypad</Text>
              </>
            )}
          </Pressable>

          <Pressable style={styles.actionButtonContainer}>
            {({ pressed }) => (
              <>
                <View
                  style={[
                    styles.actionCircle,
                    pressed && styles.actionCircleActive,
                  ]}
                >
                  <Ionicons name="heart" size={20} color="#000000" />
                </View>
                <Text style={styles.actionText}>Favorites</Text>
              </>
            )}
          </Pressable>
        </View>

        {/* Recent Section Title */}
        <Text style={styles.sectionTitle}>Recent</Text>

        {/* Calls List */}
        {callsData.map((item) => (
          <View key={item.id} style={styles.callItem}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>{item.name[0]}</Text>
            </View>
            <View style={styles.callDetails}>
              <Text style={styles.callerName} numberOfLines={1}>
                {item.name}
              </Text>
              <View style={styles.callSubRow}>
                {item.type === "incoming-missed" ? (
                  <Ionicons
                    name="arrow-down"
                    size={14}
                    color="#ea4335"
                    style={{ marginRight: 4 }}
                  />
                ) : (
                  <Ionicons
                    name="arrow-up"
                    size={14}
                    color="#00a884"
                    style={{ marginRight: 4 }}
                  />
                )}
                <Text style={styles.callTime}>{item.time}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.callActionIcon}>
              {item.isvideo ? (
                <Ionicons name="videocam" size={20} color="#000000" />
              ) : (
                <Ionicons name="call" size={18} color="#000000" />
              )}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.callFab}>
          <MaterialCommunityIcons name="phone-plus" size={22} color="#ffffff" />
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
    color: "#111111",
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
  actionButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginVertical: 14,
  },
  actionButtonContainer: {
    alignItems: "center",
  },
  actionCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#f0f2f5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  actionCircleActive: {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  },
  actionText: {
    fontSize: 12,
    color: "#3b4a54",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#667781",
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 8,
  },
  callItem: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
  },
  avatarContainer: {
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
  callDetails: {
    flex: 1,
    justifyContent: "center",
  },
  callerName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
    marginBottom: 3,
  },
  callSubRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  callTime: {
    fontSize: 13,
    color: "#667781",
  },
  callActionIcon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  fabContainer: {
    position: "absolute",
    right: 16,
    bottom: 20,
    alignItems: "center",
  },
  callFab: {
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
