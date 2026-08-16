import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

type ButtonProps = {
  style?: ViewStyle;
};

export default function Button({ style }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    width: "100%",
  },
});
