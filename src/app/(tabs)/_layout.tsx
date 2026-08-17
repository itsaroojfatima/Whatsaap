import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import StatusIcon from "@/assets/icons/status-svg";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingBottom: 5,
          marginBottom: 7,
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#54656f",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: -2,
        },
      }}
    >
      <Tabs.Screen
        name="chats"
        options={{
          title: "Chats",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabIcon, focused && styles.activePill]}>
              <MaterialIcons name="chat" size={24} color="#000000" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="updates"
        options={{
          title: "Updates",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabIcon, focused && styles.activePill]}>
              <StatusIcon />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: "Communities",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabIcon, focused && styles.activePill]}>
              <MaterialCommunityIcons
                name="account-group"
                size={26}
                color="#000000"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          title: "Calls",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabIcon, focused && styles.activePill]}>
              <Ionicons
                name={focused ? "call" : "call-outline"}
                size={24}
                color="#000000"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabIcon, focused && styles.activePill]}>
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color="#000000"
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 32,
    borderRadius: 16,
  },
  activePill: {
    backgroundColor: "#d8fdd2",
  },
});
