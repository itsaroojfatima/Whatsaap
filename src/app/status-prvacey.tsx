import { Ionicons } from "@expo/vector-icons";
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

export default function StatusPrivacyScreen() {
  const router = useRouter();
  const [allowSharing, setAllowSharing] = useState(false);
  const [fbStory, setFbStory] = useState(false);
  const [igStory, setIgStory] = useState(false);

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
        <Text style={styles.headerTitle}>Status privacy</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionLabel}>Audience who can see my status</Text>

        <TouchableOpacity style={styles.optionRow}>
          <View style={styles.iconCircle}>
            <Ionicons name="person-outline" size={20} color="#54656f" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>My contacts</Text>
          </View>
          <View style={styles.radioOuter}>
            <View style={styles.radioInnerUnchecked} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <View style={styles.iconCircle}>
            <Ionicons name="person-remove-outline" size={20} color="#54656f" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>My contacts except...</Text>
            <Text style={styles.optionSubText}>0 excluded • Edit</Text>
          </View>
          <View style={styles.radioOuter}>
            <View style={styles.radioInnerUnchecked} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <View style={styles.iconCircle}>
            <Ionicons name="person-add-outline" size={20} color="#54656f" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>Only share with...</Text>
            <Text style={styles.optionSubText}>25 included • Edit</Text>
          </View>
          <View style={styles.radioOuterChecked}>
            <View style={styles.radioInnerChecked} />
          </View>
        </TouchableOpacity>

        <View style={styles.divider} />

        <View style={styles.switchRow}>
          <View style={styles.iconCircle}>
            <Ionicons name="repeat-outline" size={20} color="#54656f" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>Allow sharing</Text>
            <Text style={styles.optionSubText}>
              Let people who can see your status reshare and forward it.
            </Text>
          </View>
          <Switch
            value={allowSharing}
            onValueChange={setAllowSharing}
            trackColor={{ false: "#767577", true: "#00a884" }}
          />
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionLabel}>Share across apps</Text>
        <Text style={styles.sectionDesc}>
          Automatically share your status to your Facebook or Instagram Stories.
          Manage in <Text style={styles.boldText}>Meta Account settings</Text>
        </Text>

        <View style={styles.switchRow}>
          <View style={styles.iconCircle}>
            <Ionicons name="logo-facebook" size={20} color="#54656f" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>Facebook Story</Text>
          </View>
          <Switch
            value={fbStory}
            onValueChange={setFbStory}
            trackColor={{ false: "#767577", true: "#00a884" }}
          />
        </View>

        <View style={styles.switchRow}>
          <View style={styles.iconCircle}>
            <Ionicons name="logo-instagram" size={20} color="#54656f" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>Instagram Story</Text>
          </View>
          <Switch
            value={igStory}
            onValueChange={setIgStory}
            trackColor={{ false: "#767577", true: "#00a884" }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  backButton: { padding: 4, marginRight: 16 },
  headerTitle: { fontSize: 20, fontWeight: "500", color: "#111111" },
  scrollContent: { paddingBottom: 30 },
  sectionLabel: {
    fontSize: 13,
    color: "#54656f",
    fontWeight: "600",
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
  },
  sectionDesc: {
    fontSize: 13,
    color: "#54656f",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  boldText: { fontWeight: "600", color: "#005c4b" },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  iconCircle: { width: 36, alignItems: "flex-start", justifyContent: "center" },
  optionTextContainer: { flex: 1, marginRight: 10 },
  optionTitle: { fontSize: 16, color: "#111111" },
  optionSubText: { fontSize: 13, color: "#54656f", marginTop: 2 },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#54656f",
    justifyContent: "center",
    alignItems: "center",
  },
  radioInnerUnchecked: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "transparent",
  },
  radioOuterChecked: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#005c4b",
    justifyContent: "center",
    alignItems: "center",
  },
  radioInnerChecked: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#005c4b",
  },
  divider: { height: 8, backgroundColor: "#f0f2f5", marginVertical: 8 },
});
