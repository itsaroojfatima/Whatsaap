import { Stack, useRouter } from "expo-router";
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

import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function VerifyNumberScreen() {
  const router = useRouter();
  const [code, setCode] = useState("");

  const isCodeComplete = code.length === 6;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false, animation: "fade" }} />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header with 3 dots */}
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="ellipsis-vertical" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Verifying your number</Text>

        <Text style={styles.subtitle}>
          You've tried to register{" "}
          <Text style={styles.boldText}>+91 98186 64836</Text> recently. Wait
          before requesting an SMS or a call with your code.{" "}
          <Text style={styles.link}>Wrong number?</Text>
        </Text>

        {/* Hidden TextInput for handling 6-digit code entry */}
        <TextInput
          style={styles.hiddenInput}
          keyboardType="number-pad"
          maxLength={6}
          value={code}
          onChangeText={setCode}
          autoFocus={true}
        />

        {/* 6-Digit Dash Lines / Display */}
        <View style={styles.codeContainer}>
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const digit = code[index] || "";
            return (
              <View key={index} style={styles.digitBox}>
                <Text style={styles.digitText}>{digit}</Text>
              </View>
            );
          })}
        </View>

        <Text style={styles.enterCodeLabel}>Enter 6-digit code</Text>

        {/* Resend Timer Section */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendTitle}>Didn't receive code?</Text>
          <Text style={styles.resendSubtitle}>
            You may request a new code in{" "}
            <Text style={styles.timerText}>28:31</Text>
          </Text>
        </View>
      </View>

      {/* Bottom Next Button */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.footer}
      >
        <TouchableOpacity
          style={[
            styles.nextButton,
            isCodeComplete ? styles.activeButton : styles.inactiveButton,
          ]}
          disabled={!isCodeComplete}
          onPress={() => router.replace("/(tabs)/chats")}
        >
          <Text
            style={[
              styles.nextButtonText,
              isCodeComplete ? styles.activeText : styles.inactiveText,
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
    marginTop: 25,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    color: "#008069",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 30,
    paddingHorizontal: 5,
  },
  boldText: {
    fontWeight: "bold",
    color: "#111",
  },
  link: {
    color: "#008069",
    fontWeight: "500",
  },
  hiddenInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    marginBottom: 12,
  },
  digitBox: {
    width: 32,
    borderBottomWidth: 1.5,
    borderBottomColor: "#555",
    alignItems: "center",
    paddingBottom: 5,
  },
  digitText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#111",
  },
  enterCodeLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 35,
  },
  resendContainer: {
    alignItems: "center",
  },
  resendTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#008069",
    marginBottom: 8,
  },
  resendSubtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  timerText: {
    fontWeight: "bold",
    color: "#333",
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 35,
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
