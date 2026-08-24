import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewGroupInfoScreen() {
  const router = useRouter();
  const [groupName, setGroupName] = useState("");
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#54656f" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New group</Text>
      </View>

      {/* Top Section: Camera icon & Group Name Input */}
      <View style={styles.topSection}>
        <TouchableOpacity
          style={styles.cameraButton}
          activeOpacity={0.7}
          onPress={() => setIsBottomSheetVisible(true)}
        >
          <Ionicons name="camera" size={24} color="#ffffff" />
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter group name"
            placeholderTextColor="#8696a0"
            value={groupName}
            onChangeText={setGroupName}
            maxLength={25}
          />
          <TouchableOpacity style={styles.emojiButton} activeOpacity={0.7}>
            <MaterialCommunityIcons
              name="emoticon-outline"
              size={24}
              color="#54656f"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Settings Options */}
      <View style={styles.optionsList}>
        {/* Disappearing Messages */}
        <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>Disappearing messages</Text>
            <Text style={styles.optionSubtitle}>Off</Text>
          </View>
          <MaterialCommunityIcons
            name="timer-outline"
            size={22}
            color="#54656f"
          />
        </TouchableOpacity>

        {/* Group Permissions - Navigates to Permissions screen */}
        <TouchableOpacity
          style={styles.optionRow}
          activeOpacity={0.7}
          onPress={() => router.push("/permission")}
        >
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>Group permissions</Text>
          </View>
          <Ionicons name="settings-outline" size={22} color="#54656f" />
        </TouchableOpacity>
      </View>

      {/* Members Section */}
      <View style={styles.membersSection}>
        <Text style={styles.membersLabel}>Members: None</Text>

        <TouchableOpacity style={styles.addMemberContainer} activeOpacity={0.7}>
          <View style={styles.addMemberIconCircle}>
            <Ionicons name="person-add" size={20} color="#ffffff" />
          </View>
          <Text style={styles.addMemberText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Floating Action Button (Green Tick Checkmark) */}
      <TouchableOpacity
        style={styles.fabButton}
        activeOpacity={0.8}
        onPress={() => {}}
      >
        <Ionicons name="checkmark" size={24} color="#ffffff" />
      </TouchableOpacity>

      {/* Bottom Sheet Modal for Camera/Group Icon */}
      <Modal
        visible={isBottomSheetVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsBottomSheetVisible(false)}
      >
        <TouchableWithoutFeedback
          onPress={() => setIsBottomSheetVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.bottomSheetContainer}>
                {/* Drag Handle */}
                <View style={styles.dragHandleContainer}>
                  <View style={styles.dragHandle} />
                </View>

                {/* Sheet Header */}
                <View style={styles.sheetHeader}>
                  <TouchableOpacity
                    onPress={() => setIsBottomSheetVisible(false)}
                  >
                    <Ionicons name="close" size={24} color="#54656f" />
                  </TouchableOpacity>
                  <Text style={styles.sheetTitle}>Group icon</Text>
                  <View style={{ width: 24 }} />
                </View>

                {/* Options List */}
                <TouchableOpacity style={styles.sheetOption}>
                  <Ionicons
                    name="camera-outline"
                    size={22}
                    color="#54656f"
                    style={styles.sheetIcon}
                  />
                  <Text style={styles.sheetOptionText}>Camera</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.sheetOption}>
                  <Ionicons
                    name="image-outline"
                    size={22}
                    color="#54656f"
                    style={styles.sheetIcon}
                  />
                  <Text style={styles.sheetOptionText}>Gallery</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.sheetOption}>
                  <MaterialCommunityIcons
                    name="emoticon-outline"
                    size={22}
                    color="#54656f"
                    style={styles.sheetIcon}
                  />
                  <Text style={styles.sheetOptionText}>Emoji & stickers</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.sheetOption}>
                  <Ionicons
                    name="search-outline"
                    size={22}
                    color="#54656f"
                    style={styles.sheetIcon}
                  />
                  <Text style={styles.sheetOptionText}>Search web</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.sheetOption}>
                  <MaterialCommunityIcons
                    name="star-four-points-outline"
                    size={22}
                    color="#54656f"
                    style={styles.sheetIcon}
                  />
                  <Text style={styles.sheetOptionText}>AI images</Text>
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
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#f0f2f5",
  },
  backButton: {
    padding: 4,
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#111111",
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cameraButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#00a884",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#00a884",
    paddingBottom: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#111111",
    paddingVertical: 4,
  },
  emojiButton: {
    padding: 4,
  },
  optionsList: {
    marginTop: 10,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    color: "#111111",
    fontWeight: "400",
  },
  optionSubtitle: {
    fontSize: 13,
    color: "#8696a0",
    marginTop: 2,
  },
  membersSection: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
  membersLabel: {
    fontSize: 13,
    color: "#54656f",
    marginBottom: 12,
    fontWeight: "600",
  },
  addMemberContainer: {
    alignItems: "center",
    width: 60,
  },
  addMemberIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#00a884",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  addMemberText: {
    fontSize: 12,
    color: "#54656f",
  },
  fabButton: {
    position: "absolute",
    right: 20,
    bottom: 25,
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#00a884",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  bottomSheetContainer: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 10,
  },
  dragHandleContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  dragHandle: {
    width: 36,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#d1d7db",
  },
  sheetHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#111111",
  },
  sheetOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  sheetIcon: {
    marginRight: 20,
  },
  sheetOptionText: {
    fontSize: 16,
    color: "#111111",
    fontWeight: "400",
  },
});
