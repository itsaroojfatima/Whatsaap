import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function EnterPhoneScreen() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");

  const isNumberEntered = phoneNumber.trim().length > 0;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false, animation: "fade" }} />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="ellipsis-vertical" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Enter your phone number</Text>

        <Text style={styles.subtitle}>
          WhatsApp will need to verify your phone number. Carrier charges may
          apply. <Text style={styles.link}>What's my number?</Text>
        </Text>
        <TouchableOpacity style={styles.countryDropdown}>
          <Text style={styles.countryText}>Pakistan</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="#008069" />
        </TouchableOpacity>
        <View style={styles.phoneInputRow}>
          <View style={styles.countryCodeBox}>
            <Text style={styles.codeText}>+ 92</Text>
          </View>
          <View style={styles.numberInputBox}>
            <TextInput
              style={styles.textInput}
              placeholder="Phone number"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              autoFocus={true}
            />
          </View>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.footer}
      >
        <TouchableOpacity
          style={[
            styles.nextButton,
            isNumberEntered ? styles.activeButton : styles.inactiveButton,
          ]}
          disabled={!isNumberEntered}
          onPress={() => router.push("/otp")}
        >
          <Text
            style={[
              styles.nextButtonText,
              isNumberEntered ? styles.activeText : styles.inactiveText,
            ]}
          >
            Next
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "ios" ? 45 : 25,
  },
  menuButton: {
    padding: 8,
    marginTop: 90,
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 25,
    marginTop: -40,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    color: "#111",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13.5,
    color: "#444",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  link: {
    color: "#008069",
    fontWeight: "500",
  },
  countryDropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1.5,
    borderBottomColor: "#00a884",
    paddingVertical: 10,
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  countryText: {
    fontSize: 16,
    color: "#111",
  },
  phoneInputRow: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  countryCodeBox: {
    width: "22%",
    borderBottomWidth: 1.5,
    borderBottomColor: "#00a884",
    paddingVertical: 10,
    marginRight: 12,
    alignItems: "center",
  },
  codeText: {
    fontSize: 16,
    color: "#111",
  },
  numberInputBox: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#00a884",
    paddingVertical: 10,
  },
  textInput: {
    fontSize: 16,
    color: "#111",
    padding: 0,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 25,
    width: "100%",
    alignItems: "center",
  },
  nextButton: {
    width: "85%",
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  inactiveButton: {
    backgroundColor: "#e9edef",
  },
  inactiveText: {
    color: "#8c9499",
  },
  activeButton: {
    backgroundColor: "#00a884",
  },
  activeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
