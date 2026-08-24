import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GroupPermissionsScreen() {
  const router = useRouter();

  const [editGroupSettings, setEditGroupSettings] = useState(true);
  const [sendMessages, setSendMessages] = useState(true);
  const [addMembers, setAddMembers] = useState(true);
  const [inviteViaLink, setInviteViaLink] = useState(false);
  const [approveMembers, setApproveMembers] = useState(false);

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
        <Text style={styles.headerTitle}>Group permissions</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionHeader}>Members can:</Text>

        {/* 1. Edit group settings */}
        <View style={styles.permissionRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="pencil-outline" size={22} color="#54656f" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.permissionTitle}>Edit group settings</Text>
            <Text style={styles.permissionSubtitle}>
              This includes the name, icon, description, disappearing message
              timer, and the ability to pin, keep or unkeep messages.
            </Text>
          </View>
          <Switch
            value={editGroupSettings}
            onValueChange={setEditGroupSettings}
            trackColor={{ false: "#dddfE2", true: "#00a884" }}
            thumbColor="#ffffff"
          />
        </View>

        {/* 2. Send new messages */}
        <View style={styles.permissionRow}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="message-text-outline"
              size={22}
              color="#54656f"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.permissionTitle}>Send new messages</Text>
          </View>
          <Switch
            value={sendMessages}
            onValueChange={setSendMessages}
            trackColor={{ false: "#dddfE2", true: "#00a884" }}
            thumbColor="#ffffff"
          />
        </View>

        {/* 3. Add other members */}
        <View style={styles.permissionRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="person-add-outline" size={22} color="#54656f" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.permissionTitle}>Add other members</Text>
          </View>
          <Switch
            value={addMembers}
            onValueChange={setAddMembers}
            trackColor={{ false: "#dddfE2", true: "#00a884" }}
            thumbColor="#ffffff"
          />
        </View>

        {/* 4. Invite via link or QR code */}
        <View style={styles.permissionRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="link-outline" size={22} color="#54656f" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.permissionTitle}>
              Invite via link or QR code
            </Text>
          </View>
          <Switch
            value={inviteViaLink}
            onValueChange={setInviteViaLink}
            trackColor={{ false: "#dddfE2", true: "#00a884" }}
            thumbColor="#ffffff"
          />
        </View>

        <Text style={[styles.sectionHeader, { marginTop: 20 }]}>
          Admins can:
        </Text>

        {/* 5. Approve new members */}
        <View style={styles.permissionRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="person-add-outline" size={22} color="#54656f" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.permissionTitle}>Approve new members</Text>
            <Text style={styles.permissionSubtitle}>
              When turned on, admins must approve anyone who wants to join the
              group.
            </Text>
            <TouchableOpacity>
              <Text style={styles.learnMore}>Learn more</Text>
            </TouchableOpacity>
          </View>
          <Switch
            value={approveMembers}
            onValueChange={setApproveMembers}
            trackColor={{ false: "#dddfE2", true: "#00a884" }}
            thumbColor="#ffffff"
          />
        </View>
      </ScrollView>
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
  scrollContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: "600",
    color: "#00a884",
    marginBottom: 16,
  },
  permissionRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  iconContainer: {
    width: 32,
    marginRight: 12,
    alignItems: "center",
    marginTop: 2,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  permissionTitle: {
    fontSize: 16,
    color: "#111111",
    fontWeight: "400",
  },
  permissionSubtitle: {
    fontSize: 13,
    color: "#8696a0",
    marginTop: 2,
    lineHeight: 18,
  },
  learnMore: {
    fontSize: 13,
    color: "#00a884",
    marginTop: 4,
    fontWeight: "500",
  },
});
