import { View, Text, StyleSheet, Platform } from "react-native";

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: Platform.OS === "android" ? 2 : 0,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    minWidth: "80%",
  },
});
