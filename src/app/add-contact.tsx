import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewContactScreen() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [syncContact, setSyncContact] = useState(false);

  // Check if form has at least name or phone to enable save button
  const isFormValid = firstName.trim().length > 0 || phone.trim().length > 0;

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
        <Text style={styles.headerTitle}>New contact</Text>

        <TouchableOpacity style={styles.qrButton}>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={22}
            color="#54656f"
          />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* First Name Field */}
          <View style={styles.inputRow}>
            <View style={styles.iconContainer}>
              <Ionicons name="person-outline" size={22} color="#54656f" />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="First name"
                placeholderTextColor="#8696a0"
                value={firstName}
                onChangeText={setFirstName}
              />
            </View>
          </View>

          {/* Last Name Field */}
          <View style={styles.inputRow}>
            <View style={styles.iconContainer} />
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Last name"
                placeholderTextColor="#8696a0"
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
          </View>

          {/* Username Field */}
          <View style={styles.inputRow}>
            <View style={styles.iconContainer}>
              <Text style={styles.atSymbol}>@</Text>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#8696a0"
                value={username}
                onChangeText={setUsername}
              />
            </View>
          </View>

          {/* Phone Field with Country Code */}
          <View style={styles.inputRow}>
            <View style={styles.iconContainer}>
              <Ionicons name="call-outline" size={22} color="#54656f" />
            </View>
            <View style={styles.phoneContainer}>
              <TouchableOpacity style={styles.countryPicker}>
                <View style={styles.countryLabelWrapper}>
                  <Text style={styles.countryLabelText}>Country</Text>
                  <View style={styles.countryDropdown}>
                    <Text style={styles.countryText}>PK +92</Text>
                    <Ionicons name="chevron-down" size={14} color="#54656f" />
                  </View>
                </View>
              </TouchableOpacity>

              <View style={styles.phoneNumberWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Phone"
                  placeholderTextColor="#8696a0"
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={setPhone}
                />
              </View>
            </View>
          </View>

          {/* Sync Contact Switch */}
          <View style={styles.syncRow}>
            <View style={styles.iconContainer}>
              <Ionicons name="sync-outline" size={22} color="#54656f" />
            </View>
            <View style={styles.syncTextContainer}>
              <Text style={styles.syncTitle}>Sync contact to phone</Text>
              <Text style={styles.syncSubtitle}>
                Only contacts with a phone number can be synced
              </Text>
            </View>
            <Switch
              value={syncContact}
              onValueChange={setSyncContact}
              trackColor={{ false: "#dddfE2", true: "#00a884" }}
              thumbColor={"#ffffff"}
              ios_backgroundColor="#dddfE2"
            />
          </View>

          {/* Save Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.saveButton,
                isFormValid
                  ? styles.saveButtonActive
                  : styles.saveButtonInactive,
              ]}
              disabled={!isFormValid}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.saveButtonText,
                  isFormValid
                    ? styles.saveButtonTextActive
                    : styles.saveButtonTextInactive,
                ]}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#f0f2f5",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#111111",
    flex: 1,
    marginLeft: 16,
  },
  qrButton: {
    padding: 4,
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  iconContainer: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  atSymbol: {
    fontSize: 22,
    color: "#54656f",
    fontWeight: "500",
  },
  inputWrapper: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#d1d7db",
    borderRadius: 8,
    paddingHorizontal: 14,
    height: 52,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  input: {
    fontSize: 16,
    color: "#111111",
    padding: 0,
  },
  phoneContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  countryPicker: {
    borderWidth: 1,
    borderColor: "#d1d7db",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 52,
    justifyContent: "center",
    width: 115,
    backgroundColor: "#ffffff",
  },
  countryLabelWrapper: {
    justifyContent: "center",
  },
  countryLabelText: {
    fontSize: 10,
    color: "#8696a0",
    marginBottom: 2,
  },
  countryDropdown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  countryText: {
    fontSize: 15,
    color: "#111111",
    fontWeight: "500",
  },
  phoneNumberWrapper: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#d1d7db",
    borderRadius: 8,
    paddingHorizontal: 14,
    height: 52,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  syncRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  syncTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  syncTitle: {
    fontSize: 16,
    color: "#111111",
    fontWeight: "400",
  },
  syncSubtitle: {
    fontSize: 13,
    color: "#8696a0",
    marginTop: 2,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  saveButton: {
    width: "100%",
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButtonInactive: {
    backgroundColor: "#f0f2f5",
  },
  saveButtonActive: {
    backgroundColor: "#00a884",
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  saveButtonTextInactive: {
    color: "#8696a0",
  },
  saveButtonTextActive: {
    color: "#ffffff",
  },
});
