import { View, Text, StyleSheet } from "react-native";
import React from "react";

const TotalDisplay = ({ duration, amount }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text>{duration}</Text>
        <Text>${amount}</Text>
      </View>
    </View>
  );
};

export default TotalDisplay;

const styles = StyleSheet.create({
  container: {
    height: 100,
    padding: 20,
    backgroundColor: "grey",
  },
  info: {
    height: "90%",
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    border: 1,
    borderRadius: 16,
    paddingHorizontal: 8,
  },
});
