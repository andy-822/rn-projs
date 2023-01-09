import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const AddExpenseScreen = () => {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput
            onChange={(e) => setTitle(e)}
            value={title}
            placeholder={"expense title"}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            onChangeText={(e) => setCost(e)}
            value={cost}
            placeholder={"cost"}
          />
        </View>
        <View>
          <Button title="add" />
        </View>
      </View>
    </View>
  );
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  inputContainer: {
    backgroundColor: "purple",
    flex: 1,
  },
  input: {
    borderWidth: 2,
    borderColor: "lightgrey",
    paddingVertical: 16,
  },
});
