import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Message {
  id: string;
  text: string;
  time: string;
  sender: "me" | "them";
  senderName?: string;
  senderColor?: string;
  status?: "sent" | "delivered" | "read";
  reaction?: string;
  isAudio?: boolean;
  audioDuration?: string;
}

const DEFAULT_MESSAGES: Record<string, Message[]> = {
  default: [
    {
      id: "m1",
      text: "Hey! How are you doing today?",
      time: "6:45 AM",
      sender: "them",
      senderName: "Hadi",
      senderColor: "#e542a3",
    },
    {
      id: "m2",
      text: "I'm doing great! Just finishing up the project work.",
      time: "6:48 AM",
      sender: "me",
      status: "read",
    },
    {
      id: "m3",
      text: "Voice message",
      time: "7:00 AM",
      sender: "them",
      isAudio: true,
      audioDuration: "0:24",
      reaction: "👍",
    },
    {
      id: "m4",
      text: "Acha weli ho k kra gi",
      time: "7:06 AM",
      sender: "them",
      senderName: "Hadi",
      senderColor: "#00a884",
    },
    {
      id: "m5",
      text: "okey jaaan",
      time: "7:07 AM",
      sender: "them",
      reaction: "❤️",
    },
    {
      id: "m6",
      text: "Perfect, talk to you soon! 😊",
      time: "7:08 AM",
      sender: "me",
      status: "read",
    },
  ],
  group: [
    {
      id: "g1",
      text: "Assignment submit karwa di sab ne?",
      time: "Yesterday, 4:15 PM",
      sender: "them",
      senderName: "Samar",
      senderColor: "#ff6b6b",
    },
    {
      id: "g2",
      text: "Haan maine subah hi portal pe upload kardi thi.",
      time: "Yesterday, 4:18 PM",
      sender: "them",
      senderName: "Abeera",
      senderColor: "#9b59b6",
    },
    {
      id: "g3",
      text: "Shella: Lanat 🖐️ ber dushmanane...",
      time: "Yesterday, 4:22 PM",
      sender: "them",
      senderName: "Shella",
      senderColor: "#e67e22",
      reaction: "😂",
    },
    {
      id: "g4",
      text: "Phir kesy tumhay maza chakhayein ga",
      time: "Yesterday, 5:30 PM",
      sender: "them",
      senderName: "Samar",
      senderColor: "#ff6b6b",
    },
    {
      id: "g5",
      text: "Haha sab chill karo kal class mein milte hain! 😂🙌",
      time: "Yesterday, 5:35 PM",
      sender: "me",
      status: "read",
    },
  ],
};

export default function ChatDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    name?: string;
    isGroup?: string;
    id?: string;
  }>();

  const chatName = params.name || "Chat";
  const isGroup =
    params.isGroup === "true" ||
    chatName.includes("crew") ||
    chatName.includes("fellows") ||
    chatName.includes("Legends") ||
    chatName.includes("secrets");

  const [messages, setMessages] = useState<Message[]>(
    isGroup ? DEFAULT_MESSAGES.group : DEFAULT_MESSAGES.default
  );
  const [inputText, setInputText] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    // Scroll to end when messages change
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 150);
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 ? hours % 12 : 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const currentTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      time: currentTime,
      sender: "me",
      status: "read",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText("");
  };

  const renderMessageItem = ({ item }: { item: Message }) => {
    const isMe = item.sender === "me";

    return (
      <View
        style={[
          styles.messageRow,
          isMe ? styles.myMessageRow : styles.theirMessageRow,
        ]}
      >
        <View
          style={[
            styles.messageBubble,
            isMe ? styles.myBubble : styles.theirBubble,
          ]}
        >
          {/* Sender name for group chats */}
          {!isMe && isGroup && item.senderName && (
            <Text
              style={[
                styles.groupSenderName,
                { color: item.senderColor || "#00a884" },
              ]}
            >
              ~ {item.senderName}
            </Text>
          )}

          {/* Audio voice note display */}
          {item.isAudio ? (
            <View style={styles.audioRow}>
              <TouchableOpacity style={styles.playButton}>
                <Ionicons name="play" size={18} color="#ffffff" />
              </TouchableOpacity>
              <View style={styles.waveformPlaceholder}>
                <View style={styles.waveformBarActive} />
                <View style={styles.waveformBarActive} />
                <View style={styles.waveformBarInactive} />
                <View style={styles.waveformBarInactive} />
                <View style={styles.waveformBarInactive} />
              </View>
              <Text style={styles.audioDurationText}>
                {item.audioDuration || "0:15"}
              </Text>
              <MaterialCommunityIcons
                name="microphone"
                size={18}
                color="#00a884"
              />
            </View>
          ) : (
            <Text style={styles.messageText}>{item.text}</Text>
          )}

          {/* Timestamp and ticks row */}
          <View style={styles.messageFooter}>
            <Text style={styles.timeText}>{item.time}</Text>
            {isMe && (
              <Ionicons
                name="checkmark-done"
                size={15}
                color="#53bdeb"
                style={styles.ticksIcon}
              />
            )}
          </View>

          {/* Reaction badge */}
          {item.reaction && (
            <View style={styles.reactionBadge}>
              <Text style={styles.reactionText}>{item.reaction}</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <StatusBar barStyle="light-content" backgroundColor="#008069" />

      {/* WhatsApp Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.headerProfileContainer}
          activeOpacity={0.8}
          onPress={() => {}}
        >
          <View style={styles.headerAvatar}>
            <Text style={styles.headerAvatarText}>
              {chatName ? chatName[0] : "C"}
            </Text>
          </View>

          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerName} numberOfLines={1}>
              {chatName}
            </Text>
            <Text style={styles.headerSubtitle} numberOfLines={1}>
              {isGroup
                ? "tap here for group info"
                : "online"}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Right Header Action Icons */}
        <View style={styles.headerRightIcons}>
          <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.7}>
            <Ionicons name="videocam" size={22} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconBtn} activeOpacity={0.7}>
            <Ionicons name="call" size={20} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerIconBtn}
            activeOpacity={0.7}
            onPress={() => setMenuVisible(true)}
          >
            <Ionicons name="ellipsis-vertical" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 3-Dots Popup Menu Modal */}
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
                  <Text style={styles.menuText}>
                    {isGroup ? "Group info" : "View contact"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setMenuVisible(false)}
                >
                  <Text style={styles.menuText}>Media, links, and docs</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setMenuVisible(false)}
                >
                  <Text style={styles.menuText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setMenuVisible(false)}
                >
                  <Text style={styles.menuText}>Mute notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setMenuVisible(false)}
                >
                  <Text style={styles.menuText}>Disappearing messages</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setMenuVisible(false)}
                >
                  <Text style={styles.menuText}>Wallpaper</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Chat Wallpaper Background & Messages List */}
      <View style={styles.chatBackground}>
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessageItem}
          contentContainerStyle={styles.messagesList}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.chatHeaderInfo}>
              {/* Date Pill */}
              <View style={styles.datePill}>
                <Text style={styles.dateText}>TODAY</Text>
              </View>

              {/* End-to-End Encryption Notice */}
              <View style={styles.encryptionCard}>
                <Ionicons
                  name="lock-closed"
                  size={12}
                  color="#667781"
                  style={{ marginRight: 4 }}
                />
                <Text style={styles.encryptionCardText}>
                  Messages and calls are end-to-end encrypted. No one outside of
                  this chat, not even WhatsApp, can read or listen to them. Tap
                  to learn more.
                </Text>
              </View>
            </View>
          }
        />
      </View>

      {/* Bottom Message Input Bar */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
      >
        <View style={styles.bottomBarContainer}>
          {/* Main Input Capsule */}
          <View style={styles.inputCapsule}>
            <TouchableOpacity style={styles.emojiBtn} activeOpacity={0.7}>
              <MaterialCommunityIcons
                name="emoticon-happy-outline"
                size={24}
                color="#8696a0"
              />
            </TouchableOpacity>

            <TextInput
              style={styles.textInput}
              placeholder="Message"
              placeholderTextColor="#8696a0"
              multiline
              value={inputText}
              onChangeText={setInputText}
            />

            <TouchableOpacity style={styles.actionBtn} activeOpacity={0.7}>
              <Ionicons name="attach" size={22} color="#8696a0" />
            </TouchableOpacity>

            {!inputText.trim() && (
              <TouchableOpacity style={styles.actionBtn} activeOpacity={0.7}>
                <Ionicons name="camera" size={20} color="#8696a0" />
              </TouchableOpacity>
            )}
          </View>

          {/* Right Floating Mic / Send Button */}
          <TouchableOpacity
            style={styles.sendFab}
            activeOpacity={0.8}
            onPress={handleSendMessage}
          >
            {inputText.trim() ? (
              <Ionicons
                name="send"
                size={18}
                color="#ffffff"
                style={{ marginLeft: 2 }}
              />
            ) : (
              <Ionicons name="mic" size={22} color="#ffffff" />
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008069",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#008069",
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
  backButton: {
    padding: 6,
    marginRight: 2,
  },
  headerProfileContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  headerAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#2a5270",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  headerAvatarText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerTitleContainer: {
    flex: 1,
  },
  headerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: 1,
  },
  headerRightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIconBtn: {
    padding: 6,
    marginLeft: 6,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  popupMenu: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginTop: Platform.OS === "android" ? 60 : 50,
    marginRight: 12,
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
    paddingVertical: 6,
  },
  menuItem: {
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 15,
    color: "#111111",
  },
  chatBackground: {
    flex: 1,
    backgroundColor: "#efeae2",
  },
  messagesList: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 16,
  },
  chatHeaderInfo: {
    alignItems: "center",
    marginBottom: 12,
  },
  datePill: {
    backgroundColor: "#e1f3fb",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 1,
    elevation: 1,
  },
  dateText: {
    fontSize: 11,
    color: "#54656f",
    fontWeight: "600",
  },
  encryptionCard: {
    backgroundColor: "#ffeecd",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    maxWidth: "92%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  encryptionCardText: {
    fontSize: 11.5,
    color: "#54656f",
    lineHeight: 16,
    textAlign: "center",
    flex: 1,
  },
  messageRow: {
    flexDirection: "row",
    marginVertical: 3,
  },
  myMessageRow: {
    justifyContent: "flex-end",
  },
  theirMessageRow: {
    justifyContent: "flex-start",
  },
  messageBubble: {
    maxWidth: "80%",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  myBubble: {
    backgroundColor: "#d9fdd3",
    borderTopRightRadius: 2,
  },
  theirBubble: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 2,
  },
  groupSenderName: {
    fontSize: 12.5,
    fontWeight: "bold",
    marginBottom: 2,
  },
  messageText: {
    fontSize: 15,
    color: "#111111",
    lineHeight: 20,
  },
  messageFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 2,
    alignSelf: "flex-end",
  },
  timeText: {
    fontSize: 10.5,
    color: "#667781",
    marginRight: 2,
  },
  ticksIcon: {
    marginLeft: 2,
  },
  reactionBadge: {
    position: "absolute",
    bottom: -8,
    right: 8,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    elevation: 2,
  },
  reactionText: {
    fontSize: 12,
  },
  audioRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    minWidth: 180,
  },
  playButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#00a884",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  waveformPlaceholder: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    flex: 1,
  },
  waveformBarActive: {
    width: 3,
    height: 16,
    backgroundColor: "#00a884",
    borderRadius: 2,
  },
  waveformBarInactive: {
    width: 3,
    height: 12,
    backgroundColor: "#d1d7db",
    borderRadius: 2,
  },
  audioDurationText: {
    fontSize: 11,
    color: "#667781",
    marginHorizontal: 6,
  },
  bottomBarContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 6,
    paddingVertical: 6,
    backgroundColor: "#efeae2",
  },
  inputCapsule: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 24,
    paddingHorizontal: 8,
    minHeight: 46,
    maxHeight: 120,
    marginRight: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 1.5,
    elevation: 2,
  },
  emojiBtn: {
    padding: 6,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#111111",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  actionBtn: {
    padding: 6,
  },
  sendFab: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#00a884",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
});
